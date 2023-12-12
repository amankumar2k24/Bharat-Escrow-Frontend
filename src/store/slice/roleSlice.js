import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialData = localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : []
const initialSellerData = localStorage.getItem("sellerData") ? JSON.parse(localStorage.getItem("sellerData")) : []

export const STATUSES = Object.freeze({
    IDLE: "idle",
    ERROR: "error",
    LOADING: 'loading',
})

const roleSlice = createSlice({
    name: "role",
    initialState: {
        data: initialData,
        sellerData: initialSellerData,
        status: STATUSES.IDLE,
        individualUserDetail: null,
        individualSellerDetail: null
    },
    reducers: {
        setIndividualDetail: (state, action) => {
            if (action.payload.type === "user") {
                state.individualUserDetail = action.payload.data
            } else if (action.payload.type === "seller") {
                state.individualSellerDetail = action.payload.data
            }
        },
        setDeleteUser: (state, action) => {
            if (action.payload) {
                state.data = state.data.filter(user => user._id !== action.payload);
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRoleData.pending, (state, action) => {
                state.status = STATUSES.LOADING
            })
            .addCase(fetchRoleData.fulfilled, (state, action) => {
                state.status = STATUSES.IDLE
                state.data = action.payload
            })
            .addCase(fetchRoleData.rejected, (state, action) => {
                state.status = STATUSES.ERROR
                state.data = []
            })
            .addCase(fetchSellerData.pending, (state, action) => {
                // state.status = STATUSES.LOADING
            })
            .addCase(fetchSellerData.fulfilled, (state, action) => {
                // state.status = STATUSES.IDLE
                state.sellerData = action.payload
                localStorage.setItem("sellerData", JSON.stringify(state.sellerData))
            })
            .addCase(fetchSellerData.rejected, (state, action) => {
                // state.status = STATUSES.ERROR
                // state.data = []
            })
            .addCase(approveUser.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(approveUser.fulfilled, (state, action) => {
                state.status = STATUSES.IDLE;
                state.data = state.data.filter(user => user._id !== action.payload._id);
                localStorage.setItem("userData", JSON.stringify(state.data));
            })
            .addCase(approveUser.rejected, (state, action) => {
                state.status = STATUSES.ERROR
            })
            .addCase(deleteUser.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.status = STATUSES.IDLE;
                state.data = state.data.filter(user => user._id !== action.payload._id);
                localStorage.setItem("userData", JSON.stringify(state.data));
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.status = STATUSES.ERROR
            })
    }
})


// Async thunk for fetching user data
export const fetchRoleData = createAsyncThunk('role/fetchData', async (role, { getState }) => {
    const res = await axios.get(`http://localhost:4100/user/get-users-by/${role}`);
    // const updateData = getState().role.data
    // localStorage.setItem("userData", JSON.stringify(updateData))
    const data = await res.data.result;
    return data
});

// Async thunk for fetching seller data
export const fetchSellerData = createAsyncThunk('seller/fetchData', async () => {
    const res = await axios.get(`http://localhost:4100/seller/get-seller`);
    const data = await res.data.result;
    return data
});

// Async thunk for approving a user
export const approveUser = createAsyncThunk('role/approveUser', async (userId, { getState }) => {
    const res = await axios.patch(`http://localhost:4100/user/approved-user/${userId}`);
    return res.data.result;
});

// Async thunk for deleting a user
export const deleteUser = createAsyncThunk('role/deleteUser', async (userId) => {
    const res = await axios.delete(`http://localhost:4100/user/delete-user/${userId}`);
    return res.data;
});



// export reducers
export default roleSlice.reducer;
export const { setIndividualDetail, setDeleteUser } = roleSlice.actions