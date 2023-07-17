// import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

// interface IBookFil {

//   publication: string;
//   genre: string;
//   title: string;
//   isLoading: boolean;
// }

// const initialState:IBookFil = {

//   isLoading: true,
//   publication: '',
//   genre: '',
//   title: '',
// };
// const BooksSlice = createSlice({
//   name: 'books',
//   initialState: {
//     books: [],
//     filteredBooks: [],
//     isLoading: true,
//     search: ""
//   },
//   reducers: {
//     booksSuccess:(state,action)=>{
//       state.books = action.payload
//       state.isLoading =false
//        return {
//         books: action.payload,
//         filteredBooks: [...action.payload],
//         isLoading: false
//       };
//     },

//       searchByName: (state, action) => {
//       const filteredBooks = state.books.filter((books) =>
//         books?.genre.toLowerCase().includes(action.payload.toLowerCase()) ||
//         books?.publication.toLowerCase().includes(action.payload.toLowerCase()) ||
//         books?.title.toLowerCase().includes(action.payload.toLowerCase()) ||
//       );
//       return {
//         ...state,
//         filteredUsers:
//           action.payload.length > 0 ? filteredBooks : [...state.books]
//       };
//     }

//   },
// });

// export const { booksSuccess, filteredBooks } = BooksSlice.actions;

// export default BooksSlice.reducer;
