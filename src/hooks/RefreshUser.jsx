// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { selectIsSignedIn } from "../redux/auth/selectors";



// // import { userInfo } from '../redux/user/operations';
// // import { tokenRefresh } from '../redux/auth/operations';
// // import { useSearchParams } from 'react-router-dom';
// // import jwtDecode from 'jwt-decode';

// export const useRefreshUser = () => {
//   const dispatch = useDispatch();
//   const isSignedIn = useSelector(selectIsSignedIn);

//   useEffect(() => {
//     //   const [searchParams] = useSearchParams();
//     //   const gToken = searchParams.get('token');

//     //   if (gToken) {
//     //     const decoded = jwtDecode(gToken);
//     //     const current = new Date();
//     //     if (decoded.exp * 1000 > current.getTime()) {
//     //       localStorage.setItem('token', gToken);
//     //     }
//     //   }

//     const persistedState = localStorage.getItem("persist:root");
//     if (persistedState) {
//       const parsedState = JSON.parse(persistedState);

//       if (parsedState.auth) {
//         const authState = JSON.parse(parsedState.auth);
//         const token = authState.token;
//         console.log('token: ', token);

//         if (token) {
//           const dispatchRefreshToken = async () => {
//             try {
//             //   await dispatch(tokenRefresh()).unwrap();
//             //   await dispatch(userInfo()).unwrap();
//             } catch (err) {
//               console.error(
//                 "Error refreshing token or fetching user info:",
//                 err
//               );
//             }
//           };
//           dispatchRefreshToken();
//         }
//       }
//     }
//   }, [dispatch]);

//   return [isSignedIn];
// };

