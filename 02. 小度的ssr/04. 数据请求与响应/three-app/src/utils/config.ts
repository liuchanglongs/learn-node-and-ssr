// import 'server-only'
// import { experimental_taintUniqueValue } from 'react'
// // import 'client-only'

// export function getUserData() {
//   const data = {
//     key: 'abc_123'  // 隐私数据
//   }
//   experimental_taintUniqueValue(
//     "Do not pass the key to the client",
//     data,
//     data.key
//   )
//   return data
// }

import "server-only";
// import "client-only";

export function getUserData() {
  const data = {
    key: "abc_123", // 隐私数据
  };
  return data;
}
