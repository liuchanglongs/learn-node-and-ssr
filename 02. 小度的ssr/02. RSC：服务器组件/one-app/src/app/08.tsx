// "use client";

// import { createContext } from "react";

// const ThemeContext = createContext("");

// export default function Page() {
//   return (
//     <div>
//       <h2>hello page 08</h2>
//       <ThemeContext.Provider value="dark">
//         <div>模拟一个头部组件</div>
//       </ThemeContext.Provider>
//     </div>
//   );
// }

import Theme from "@/components/Theme";
import Header from "@/components/Header";

export default function Page() {
  return (
    <div>
      <h2>hello page 08</h2>
      <Theme value="dark">
        <Header />
      </Theme>
    </div>
  );
}
