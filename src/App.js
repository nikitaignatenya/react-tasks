import { use, useEffect, useState, useRef, useCallback } from "react";
import "./App.css";
import axios from "axios";
//   1. На входе статичный массив чисел. Отобразить на странице только чётные числа, каждое в
// теге <li>.
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function App() {
//   const res = arr.filter((el) => el % 2 == 0).map((el) => <li>{el}</li>);
//   return (
//     <div>
//       <ul>{res}</ul>
//     </div>
//   );
// }

// 2. На входе статичный массив строк. Отфильтровать и отобразить только те строки, длина
// которых больше 5 символов. Вывести в виде списка.

// const arrString = ["hello", "hi", "privet", "by"];

// function App() {
//   const res = arrString
//     .filter((el) => el.length > 5)
//     .map((el) => <li>{el}</li>);
//   return (
//     <div>
//       <ul>{res}</ul>
//     </div>
//   );
// }

// 3. На входе массив чисел. Отобразить сумму всех чисел на странице в теге <h3>.

// const arr = [1, 3, 4, 5, 6];
// function App() {
//   const res = arr.reduce((sum, el) => (sum += el), 0);
//   return (
//     <div>
//       <h3>{res}</h3>
//     </div>
//   );
// }

// 4. На входе массив строк. Преобразовать каждую строку в верхний регистр и отобразить на
// странице.

// const arr = ["hello", "hi", "privet"];

// function App() {
//   const res = arr.map((el) => el.toUpperCase()).map((el) => <li>{el}</li>);
//   return (
//     <div>
//       <ul>{res}</ul>
//     </div>
//   );
// }

// 5. На входе массив булевых значений [true, false, true...]. Отобразить на странице в виде
// (если true) и (если false).

// const arr = [true, false, true, false];

// function App() {
//   return (
//     <div>
//       <ul>{arr.map((el) => (el == true ? <li>✅</li> : <li>❌</li>))}</ul>
//     </div>
//   );
// }

// 6. На входе массив дат в формате строки. Отобразить только те, которые позже 2020 года.

// const arr = ["17.02.2023", "17.02.2009", "17.02.2025", "17.02.2019"];

// function App() {
//   const res = arr
//     .map((el) => el.split("."))
//     .filter((el) => +el[2] > 2020)
//     .map((el) => <li>{el.join(".")}</li>);
//   return (
//     <div>
//       <ul>{res}</ul>
//     </div>
//   );
// }
// export default App;

// 7. На входе массив из строк и чисел. Отобразить строки с классом text, а числа с классом
// number.

// const arr = [1, "hi", 3, "hello"];
// function App() {
//   const res = arr.map((el) =>
//     typeof el == "string" ? (
//       <li className="text">{el}</li>
//     ) : (
//       <li className="number">{el}</li>
//     )
//   );
//   return (
//     <div>
//       <ul>{res}</ul>
//     </div>
//   );
// }

// 8. На входе массив имён. Отобразить приветствие для каждого имени в формате: "Привет,
// [имя]!" в теге <p>.

// const arr = ["Nikita", "Stas", "Artem", "Dima"];
// function App() {
//   const res = arr.map((el) => <p>Привет, {el}!</p>);
//   return <div>{res}</div>;
// }

// 9. На входе статичный массив чисел. Ваша задача каждое число массива возвести в квадрат и
// отобразить на странице

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function App() {
//   const res = arr.map((el) => <li>{el ** 2}</li>);
//   return <ul>{res}</ul>;
// }

// 10. На входе статичный массив чисел. Ваша задача найти корень каждого числа и отобразить на
// странице в виде h1

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function App() {
//   const res = arr.map((el) => <h1>{Math.sqrt(el)}</h1>);
//   return <div>{res}</div>;
// }

// 11. На входе статичный массив строк. Ваша задача отфильтровать и отобразить на странице
// только те строки, которые содержат знак @

// const arr = ["hi@", "hello", "privet@"];
// function App() {
//   const res = arr.filter((el) => el.includes("@")).map((el) => <li>{el}</li>);
//   return <ul>{res}</ul>;
// }

// 12. На входе статичный массив строк. Ваша задача отобразить на странице все строки массива,
// а также картинку. Каждая итерация будет возвращать
// <div>
//  <p>el</p>
//  <img/>
// </div>

// import img from "./taskImage.webp";

// const arr = ["hi@", "hello", "privet@"];
// function App() {
//   const res = arr.map((el) => (
//     <div>
//       <p>{el}</p>
//       <img src={img} />
//     </div>
//   ));
//   return <div>{res}</div>;
// }

// 13. На входе статичный массив чисел и букв. Ваша задача отобразить на странице в случае
// числа четность и нечетность текущего значения в параграфе, в случае строки отобразить
// саму строку в параграфе

// const arr = [2, "hello", 1, "hi"];

// const res = arr.map((el) =>
//   typeof el == "number" && el % 2 == 0 ? (
//     <p>Чётный</p>
//   ) : typeof el == "number" && el % 2 !== 0 ? (
//     <p>Нечётный</p>
//   ) : (
//     <p>{el}</p>
//   )
// );
// function App() {
//   return <div>{res}</div>;
// }

// 14. На входе массив из объектов. каждый объект содержит title с названием фильма и
// description с кратким описанием фильма. В h1 отобразить каждый title, в p - description

// const arr = [
//   { title: "Фильм1", description: "Краткое описание этого фильма1" },
//   { title: "Фильм2", description: "Краткое описание этого фильма2" },
//   { title: "Фильм3", description: "Краткое описание этого фильма3" },
// ];

// function App() {
//   const res = arr.map((el) => (
//     <div>
//       <h1>{el.title}</h1>
//       <p>{el.description}</p>
//     </div>
//   ));
//   return <div>{res}</div>;
// }

// 15. На входе массив объектов { city: string, population: number }. Отобразить города, где
// население больше 1 млн.

// const arr = [
//   { city: "Gomel", population: 500000n },
//   { city: "Minsk", population: 2000000n },
//   { city: "Grodno", population: 300000n },
// ];

// function App() {
//   const res = arr
//     .filter((el) => el.population > 1000000n)
//     .map((el) => <p>{el.city}</p>);
//   return <div>{res}</div>;
// }

// 2. На входе массив чисел. Отобразить числа, которые делятся на 3 без остатка, в теге <span>.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function App() {
//   const res = arr.filter((el) => (el % 3 == 0 ? <span> {el}</span> : null));
//   return <div>{res}</div>;
// }

// 3. На входе массив строк. Если строка содержит слово "JS" — отобразить её, иначе пропустить

// const arr = ["hi", "helloJS", "nikita", "stasJS"];
// function App() {
//   const res = arr.filter((el) => el.includes("JS")).map((el) => <li>{el}</li>);
//   return <ul>{res}</ul>;
// }

// 4. На входе массив объектов { task: string, completed: boolean }. Отобразить все задачи.
// Выполненные — зачёркнутыми

// import "./App.css";

// const arr = [
//   { task: "Ts1", completed: true },
//   { task: "Ts2", completed: false },
//   { task: "Ts3", completed: true },
// ];
// function App() {
//   const res = arr.map((el) =>
//     el.completed == true ? (
//       <li style={{ textDecoration: "underline" }}> {el.task}</li>
//     ) : (
//       <li> {el.task}</li>
//     )
//   );
//   return <ul>{res}</ul>;
// }
// export default App;

// 1. Создайте компонент с полем ввода и параграфом. При вводе данных в input отображать
// вводимое значение в параграф текущей страницы

// import { useState } from "react";

// function App() {
//   const [a, b] = useState("");
//   return (
//     <>
//       <input
//         onChange={(e) => {
//           b(e.target.value);
//         }}
//       ></input>
//       <p>{a}</p>
//     </>
//   );
// }

// export default App;

// 2. Создайте компонент с полем ввода и кнопкой. По клику на кнопку собрать данные из input
// и проверить вводимую строку на палиндром. Результат отображать в консоль

// import { useState } from "react";

// function App() {
//   const [a, b] = useState("");
//   return (
//     <>
//       <input
//         onChange={(e) => {
//           b(e.target.value);
//         }}
//       ></input>
//       <button
//         onClick={() => {
//           a.split("").reverse().join("") === a
//             ? console.log(true)
//             : console.log(false);
//         }}
//       >
//         Click
//       </button>
//     </>
//   );
// }

// export default App;

// 3. Создайте компонент с полем ввода и кнопкой. По клику на кнопку собрать данные из input
// и проверить вводимую строку на почту. Результат отображать в консоль

// import { useState } from "react";

// function App() {
//   const test = /[A-Za-z0-9]+\@[A-Za-z]+\.[A-Za-z]+/;
//   const [a, b] = useState("");
//   return (
//     <>
//       <input
//         onChange={(e) => {
//           b(e.target.value);
//         }}
//       ></input>
//       <button
//         onClick={() => {
//           test.test(a) ? console.log(true) : console.log(false);
//         }}
//       >
//         Click
//       </button>
//     </>
//   );
// }

// export default App;

// 4. Создайте компонент с 2 полями ввода и кнопкой. По клику на кнопку собрать данные из
// двух input (2 разных state). Сравнить значения 2 input на равенство. Результат отображать в
// консоль

// import { useState } from "react";

// function App() {
//   const [a, b] = useState();
//   const [x, y] = useState();
//   return (
//     <>
//       <input
//         onChange={(e) => {
//           b(e.target.value);
//         }}
//       ></input>
//       <input
//         onChange={(e) => {
//           y(e.target.value);
//         }}
//       ></input>
//       <button
//         onClick={() => {
//           a == x ? console.log(true) : console.log(false);
//         }}
//       >
//         Click
//       </button>
//     </>
//   );
// }

// export default App;

// 5. Создайте компонент с полем ввода имени и кнопкой "Привет". При вводе имени в поле и
// нажатии на кнопку, компонент должен отображать приветственное сообщение с именем,
// введенным пользователем

// import { useState } from "react";
// function App() {
//   const [name, f] = useState();
//   return (
//     <>
//       <input
//         onChange={(e) => {
//           f(e.target.value);
//         }}
//       ></input>
//       <button
//         onClick={() => {
//           alert(` Привет, ${name}!`);
//         }}
//       >
//         Привет
//       </button>
//     </>
//   );
// }

// export default App;

// 6. Создайте компонент с кнопкой "Показать/Скрыть текст". При нажатии на кнопку текст
// должен появляться или исчезать

// import { useState } from "react";

// function App() {
//   const [disp, f] = useState("block");
//   return (
//     <>
//       <button
//         onClick={() => {
//           disp == "block" ? f("none") : f("block");
//         }}
//       >
//         Показать/Скрыть текст
//       </button>
//       <p style={{ display: disp }}>HELLO</p>
//     </>
//   );
// }

// export default App;

// 7. Создайте компонент с кнопкой и параграфом для отображения результата счетчика
// (изначально счетчик равен 0). Ваша задача так реализовать функционал, чтобы при клике на
// кнопку автоматически прибавлялась +1 к стейту счетчика

// import { useState } from "react";
// function App() {
//   const [a, b] = useState(0);
//   return (
//     <>
//       <button
//         onClick={() => {
//           b(a + 1);
//         }}
//       >
//         Click
//       </button>
//       <p>{a}</p>
//     </>
//   );
// }

// export default App;

// 8. Дополните предыдущую задачу. Создайте компонент с 2 кнопками и параграфом для
// отображения результата счетчика (изначально счетчик равен 0). Ваша задача так
// реализовать функционал, чтобы при клике на кнопку +1 автоматически прибавлялась +1 к
// стейту счетчика, а при клике на кнопку -1, происходило вычитание значения 1

// import { useState } from "react";
// function App() {
//   const [a, b] = useState(0);
//   return (
//     <>
//       <button
//         onClick={() => {
//           b(a + 1);
//         }}
//       >
//         Click +1
//       </button>
//       <button
//         onClick={() => {
//           b(a - 1);
//         }}
//       >
//         Click -1
//       </button>
//       <p>{a}</p>
//     </>
//   );
// }

// export default App;

// 9. Дополните предыдущую задачу. Создайте компонент, который отображает счетчик и кнопку
// "Сброс". При нажатии на кнопку, счетчик должен сбрасываться в ноль. Используйте useState,
// чтобы управлять значением счетчика.

// import { useState } from "react";
// function App() {
//   const [a, b] = useState(0);
//   return (
//     <>
//       <button
//         onClick={() => {
//           b(a + 1);
//         }}
//       >
//         Click +1
//       </button>
//       <button
//         onClick={() => {
//           b(a - 1);
//         }}
//       >
//         Click -1
//       </button>
//       <button
//         onClick={() => {
//           b(0);
//         }}
//       >
//         Click 0
//       </button>
//       <p>{a}</p>
//     </>
//   );
// }

// export default App;

// 10. Создайте кнопку с названием "Добавить цвет". При клике на эту кнопку цвет шрифта
// заголовка H1 должен измениться. При следующем клике цвет должен вернуться в
// первоначальное состояние. Текст кнопки также должен меняться с "Открыто" на "Закрыто"
// при нажатии на саму кнопку.

// import { useState } from "react";
// function App() {
//   const [a, b] = useState();

//   return (
//     <>
//       <h1 style={{ color: a !== true ? "green" : "red" }}>HELLO</h1>
//       <button
//         onClick={(e) => {
//           if (a !== true) {
//             e.target.textContent = "Закрыто";
//             b(true);
//           } else {
//             e.target.textContent = "Открыто";
//             b(false);
//           }
//         }}
//       >
//         Открыто
//       </button>
//     </>
//   );
// }

// export default App;

// 11. Напишите компонент, включающий в себя выезжающее меню из трех параграфов. По
// нажатию на кнопку "Открыть" меню должно отображаться.

// import { useState } from "react";

// function App() {
//   const [a, b] = useState();
//   return (
//     <>
//       <button
//         onClick={() => {
//           !a ? b(true) : b(false);
//         }}
//       >
//         Click
//       </button>
//       <div style={{ display: !a ? "none" : "block" }}>
//         <p>1</p>
//         <p>2</p>
//         <p>3</p>
//       </div>
//     </>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [a, b] = useState("block");
//   return (
//     <>
//       <button
//         onClick={() => {
//           a == "block" ? b("none") : b("block");
//         }}
//       >
//         Click
//       </button>
//       <p style={{ display: a }}>Hello</p>
//     </>
//   );
// }

// export default App;

// Поле ввода сохраняет введённый текст и отображает его ниже в h1.
// Ввод "hello" — отображается в h1 "hello"

// import { useState } from "react";

// function App() {
//   const [a, b] = useState();
//   return (
//     <>
//       <input
//         onChange={(e) => {
//           b(e.target.value);
//         }}
//       ></input>
//       <h1>{a}</h1>
//     </>
//   );
// }

// export default App;

// Кнопка с иконкой "лайк" увеличивает счётчик лайков.
// Начальное значение — 0
// Один клик — 1
// Три клика — 3

// import { useState } from "react";

// function App() {
//   const [a, b] = useState(0);
//   return (
//     <>
//       <button
//         onClick={() => {
//           b(a + 1);
//         }}
//       >
//         Click
//       </button>
//       <h1>{a}</h1>
//     </>
//   );
// }

// export default App;

// После заполнения инпута и клика на кнопку отображается "Отправлено: [значение]".
// Ввод "email@example.com" → клик → отображается "Отправлено: email@example.com"
// Очистить и ввести "hello@world.com" → клик → "Отправлено: hello@world.com

// import { useState } from "react";

// function App() {
//   const [a, b] = useState();
//   const [x, z] = useState("none");
//   return (
//     <>
//       <input
//         onChange={(e) => {
//           b(e.target.value);
//         }}
//       ></input>
//       <button
//         onClick={() => {
//           z("block");
//         }}
//       >
//         Click
//       </button>
//       <h3 style={{ display: x }}>{a}</h3>
//     </>
//   );
// }

// export default App;

// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";

// import { use, useState } from "react";

// 1. На странице есть кнопка и текст. При каждом нажатии на кнопку число в тексте
// увеличивается на один. useState — хранит число (количество кликов).

// function App() {
//   const [a, b] = useState(0);
//   return (
//     <>
//       <Button
//         variant="contained"
//         onClick={() => {
//           b(a + 1);
//         }}
//       >
//         Click
//       </Button>
//       <h1>{a}</h1>
//     </>
//   );
// }

// export default App;

// 2. На странице есть кнопка и текст. При нажатии на кнопку текст меняется с «Привет» на
// «Пока» и обратно. useState — хранит строку («Привет» или «Пока»).

// function App() {
//   const [a, b] = useState("Привет");
//   return (
//     <>
//       <Button
//         variant="contained"
//         onClick={() => {
//           a == "Привет" ? b("Пока") : b("Привет");
//         }}
//       >
//         Contained
//       </Button>
//       <h1>{a}</h1>
//     </>
//   );
// }

// export default App;

// 3. На странице есть поле для ввода текста и абзац. Всё, что вводится в поле, сразу
// отображается в абзаце. useState — хранит строку с текстом из поля.

// function App() {
//   const [a, b] = useState();
//   return (
//     <>
//       <TextField
//         id="outlined-basic"
//         label="Outlined"
//         variant="outlined"
//         onChange={(e) => {
//           b(e.target.value);
//         }}
//       />
//       <h1>{a}</h1>
//     </>
//   );
// }

// export default App;

// 4. На странице есть кнопка и абзац с текстом. При нажатии на кнопку текст скрывается, при
// повторном нажатии снова появляется. useState — хранит логическое значение (true/false).

// function App() {
//   const [a, b] = useState("none");
//   return (
//     <>
//       <Button
//         variant="outlined"
//         onClick={() => {
//           a == "none" ? b("block") : b("none");
//         }}
//       >
//         Outlined
//       </Button>
//       <h1 style={{ display: a }}>Hello</h1>
//     </>
//   );
// }

// export default App;

// 5. На странице есть кнопка и абзац. При нажатии на кнопку цвет текста меняется (например,
// с чёрного на красный). useState — хранит текущий цвет текста.

// function App() {
//   const [a, b] = useState("black");
//   return (
//     <>
//       <button
//         onClick={() => {
//           a == "black" ? b("red") : b("black");
//         }}
//       >
//         Click
//       </button>
//       <h1 style={{ color: a }}>collor</h1>
//     </>
//   );
// }
// export default App;

// 6. На странице есть кнопка и список. При нажатии в список добавляется новый элемент с
// текстом NEW. useState — хранит массив строк.

// function App() {
//   const [a, b] = useState(["NEW"]);
//   return (
//     <>
//       <button
//         onClick={() => {
//           b([...a, "NEW"]);
//         }}
//       >
//         Click
//       </button>
//       <ul>
//         {a.map((el) => (
//           <li>{el}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
// export default App;

// 7. На странице есть список и кнопка. При нажатии удаляется последний элемент из списка.
// useState — хранит массив элементов.

// function App() {
//   const [a, b] = useState(["hi", "hello", "Привет"]);
//   return (
//     <>
//       <button
//         onClick={() => {
//           b(a.slice(0, -1));
//         }}
//       >
//         Click
//       </button>
//       <ul>
//         {a.map((el) => (
//           <li>{el}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default App;

// 8. На странице есть картинка и две кнопки («Следующая» и «Предыдущая»). Кнопки
// переключают картинки по массиву (5 шт). useState — хранит индекс текущей картинки.

// import img_1 from "./files/1.webp";
// import img_2 from "./files/2.webp";
// import img_3 from "./files/3.webp";
// import img_4 from "./files/4.webp";

// function App() {
//   const arr = [img_1, img_2, img_3, img_4];
//   const [a, b] = useState(0);
//   return (
//     <div style={{ display: "flex", alignItems: "center", gap: " 100px" }}>
//       <button
//         onClick={() => {
//           a == 0 ? b(3) : b(a - 1);
//         }}
//       >
//         «Предыдущая»
//       </button>
//       <img src={arr[a]}></img>

//       <button
//         onClick={() => {
//           a == 3 ? b(0) : b(a + 1);
//         }}
//       >
//         «Следующая»
//       </button>
//     </div>
//   );
// }

// export default App;

// import "./App.css";
// import { useEffect, useState } from "react";

// 1. Сделай компонент со счётчиком. Каждый раз, когда пользователь нажимает кнопку, значение
// счётчика должно отобрадаться в console.log внутри useEffeect

// function App() {
//   const [a, b] = useState(0);
//   useEffect(() => {
//     console.log(a);
//   });
//   return (
//     <>
//       <button
//         onClick={() => {
//           b(a + 1);
//         }}
//       >
//         Click
//       </button>
//       <h1>{a}</h1>
//     </>
//   );
// }

// export default App;

// 2. Сделай компонент, который запускает таймер (setInterval) и каждую секунду увеличивает число на
// экране.

// function App() {
//   const [a, b] = useState(0);
//   useEffect(() => {
//     const set = setInterval(() => {
//       b(a + 1);
//     }, 1000);
//     return () => clearInterval(set);
//   });
//   return (
//     <>
//       <h1>{a}</h1>
//     </>
//   );
// }

// export default App;

// 3. При монтировании компонента сделай fetch на какой-нибудь API (например,
// https://jsonplaceholder.typicode.com/posts/1) и выведи заголовок поста.

// function App() {
//   const [a, b] = useState();
//   async function get() {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1"
//     );
//     const res = await response.json();
//     b(res.title);
//   }
//   useEffect(() => {
//     get();
//   });
//   return <h1>{a}</h1>;
// }

// export default App;

// 4. При монтировании сделай fetch на https://jsonplaceholder.typicode.com/users и отобрази список имён
// пользователей (name).

// function App() {
//   const [a, b] = useState([]);
//   async function getRes() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const res = await response.json();
//     b(res);
//   }
//   useEffect(() => {
//     getRes();
//   });
//   return (
//     <>
//       <ul>
//         {a.map((el) => (
//           <div>{el.name}</div>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default App;

// 5. Сделай компонент, который каждые 10 секунд загружает случайный пост
// (https://jsonplaceholder.typicode.com/posts/{случайное число}) и отображает его заголовок.

// function App() {
//   const [a, b] = useState({ title: "HELLO" });
//   async function getRes() {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${Math.ceil(
//         Math.random() * 100
//       )}`
//     );
//     const res = await response.json();
//     b(res);
//   }

//   useEffect(() => {
//     const set = setInterval(() => {
//       getRes();
//     }, 1000);
//     return () => clearInterval(set);
//   });

//   return (
//     <>
//       <div>{a.title}</div>
//     </>
//   );
// }
// export default App;

// import Vd from "./abc.webm";

// function App() {
//   return (
//     <div style={{ backgroundColor: "black" }}>
//       <video
//         src={Vd}
//         type="video/webm"
//         autoplay
//         muted
//         playsinline
//         controls
//       ></video>
//       <img src={Vd} style={{ width: "300px", height: "300px" }}></img>
//     </div>
//   );
// }

// export default App;

// 1. При первичном рендеринге загрузите данные пользователя с https://jsonplaceholder.typicode.com/users/1 .
// Отобразите информацию о пользователе в виде карточки. Внутри useState хранится объект пользователя с
// сервера. Обработайте возможные ошибки при обращении к серверу.

// function App() {
//   const [a, b] = useState();
//   async function getData() {
//     const data = await axios.get(
//       "https://jsonplaceholder.typicode.com/users/1"
//     );
//     b(data.data);
//     console.log(data.data);
//   }
//   useEffect(() => {
//     getData();
//   }, []);
//   return (
//     <div>
//       <div>{a.name}</div>
//       <div>{a.email}</div>
//       <div>{a.username}</div>
//     </div>
//   );
// }

// export default App;

// 2. При первичном рендеринге загрузите список постов с https://jsonplaceholder.typicode.com/posts .
// Отобразите первые 10 постов в виде списка. Внутри useState хранится массив постов с сервера.

// function App() {
//   const [a, b] = useState([]);
//   async function getData() {
//     const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
//     b(data.data);
//     console.log(data.data);
//   }
//   useEffect(() => {
//     getData();
//   }, []);
//   let i = 0;
//   return (
//     <div>
//       <ul>{a.map((el, i) => (i < 10 ? <li>{el.title}</li> : <></>))}</ul>
//     </div>
//   );
// }

// export default App;

// 3. На странице должны отображаться инпут и div c ответом сервера. При первичном рендеринге отправить
// запрос на https://jsonplaceholder.typicode.com/albums?title_like=${query}. При вводе данных в инпут повторно
// отправляйте запрос. Внутри useState хранится массив найденных альбомов. Отобразите результаты поиска
// в виде сетки карточек. (В текущей задаче useEffect вызывает асинхронную функцию не только при
// первичном рендеринге, но и при изменении состояния значения инпута)

// function App() {
//   const [a, b] = useState();
//   const [serv, funcServ] = useState([]);
//   useEffect(() => {
//     getData();
//   }, [a]);
//   async function getData() {
//     const data = await axios.get(
//       `https://jsonplaceholder.typicode.com/albums?title_like=${a}`
//     );
//     funcServ(data.data);
//   }
//   return (
//     <>
//       <input
//         onChange={(e) => {
//           b(e.target.value);
//         }}
//       ></input>
//       <div>
//         {serv.map((el) => (
//           <div>{el.title}</div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default App;

// 4. При первичном рендеринге отправить GET запрос по адресу https://api.ipify.org/?format=json . Результат
// сервера отобразить в заголовок

// function App() {
//   const [a, b] = useState({});
//   useEffect(() => {
//     getData();
//   });
//   async function getData() {
//     const data = await axios.get("https://api.ipify.org/?format=json");
//     b(data.data);
//   }
//   return <>{a.ip}</>;
// }

// export default App;

// 1. Создайте компонент, который предоставляет две кнопки: "Показать" и "Скрыть". При
// нажатии на "Показать" отображается текст, а при нажатии на "Скрыть" текст скрывается.

// function App() {
//   const [a, f] = useState("none");
//   return (
//     <>
//       <button
//         onClick={() => {
//           f("block");
//         }}
//       >
//         Показать
//       </button>
//       <button
//         onClick={() => {
//           f("none");
//         }}
//       >
//         Скрыть
//       </button>
//       <h1 style={{ display: a }}>HELLO</h1>
//     </>
//   );
// }

// export default App;

// 2. Создайте компонент выбора цвета, который включает 4шт. – button (в качестве textContent:
// red, green, blue, yellow), 1шт. – h1 и позволяет пользователю выбирать цвет. По клику на
// соответствующую кнопку цвет заголовка должен меняться.

// function App() {
//   const array = ["red", "green", "blue", "yellow"];
//   const [a, f] = useState();
//   return (
//     <>
//       <button
//         onClick={() => {
//           f(array[0]);
//         }}
//       >
//         RED
//       </button>
//       <button
//         onClick={() => {
//           f(array[1]);
//         }}
//       >
//         GREEN
//       </button>
//       <button
//         onClick={() => {
//           f(array[2]);
//         }}
//       >
//         BLUE
//       </button>
//       <button
//         onClick={() => {
//           f(array[3]);
//         }}
//       >
//         YELLOW
//       </button>
//       <h1 style={{ color: a }}>HELLO</h1>
//     </>
//   );
// }

// export default App;

// 3. Создайте компонент по клику на кнопку проверить значение введенного поля для ввода
// регулярным выражением на почту. В console.log отобразить true если введенная строка
// удовлетворяет регулярному выражению и false в противном случае.

// function App() {
//   const [a, b] = useState("");
//   const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return (
//     <>
//       <input
//         onChange={(e) => {
//           b(e.target.value);
//         }}
//       ></input>
//       <button
//         onClick={() => {
//           reg.test(a) ? console.log(true) : console.log(false);
//         }}
//       >
//         Check
//       </button>
//     </>
//   );
// }

// export default App;

// 4. Отобразите список элементов массива, кнопку и поле для ввода. По клику на кнопку брать
// значение инпута и добавлять в конец списка массива.

// function App() {
//   const [a, b] = useState("");
//   const [d, f] = useState(["hi", "hello", "whatsup", "by"]);

//   return (
//     <>
//       <input
//         onChange={(e) => {
//           b(e.target.value);
//         }}
//       ></input>
//       <button
//         onClick={() => {
//           f([...d, a]);
//         }}
//       >
//         Add
//       </button>
//       <ul>
//         {d.map((el) => {
//           return <li>{el}</li>;
//         })}
//       </ul>
//     </>
//   );
// }

// export default App;

// 1. Создайте компонент счетчика, который увеличивает значение счетчика на 1 каждую секунду
// с использованием useEffect.

// function App() {
//   const [a, b] = useState(0);
//   useEffect(() => {
//     const res = setInterval(() => b(a + 1), 1000);
//     return () => clearInterval(res);
//   }, [a]);

//   return (
//     <>
//       <h1>{a}</h1>
//     </>
//   );
// }

// export default App;

// 2. Создайте компонент, который выполняет запрос к API https://api.ipify.org/?format=json и
// отображает полученные данные в заголовок.

// function App() {
//   const [a, b] = useState("");
//   async function response() {
//     const getData = await axios.get("https://api.ipify.org/?format=json");
//     console.log(getData.data.ip);

//     b(getData.data.ip);
//   }
//   useEffect(() => {
//     response();
//   });
//   return (
//     <>
//       <h1>{a}</h1>
//     </>
//   );
// }

// export default App;

// 3. Создайте компонент, который отображает текущее время и обновляет его каждую секунду.

// function App() {
//   const data = new Date();
//   const time = data.toLocaleTimeString();
//   const [a, b] = useState(time);
//   useEffect(() => {
//     const res = setInterval(() => {
//       const data = new Date();
//       b(data.toLocaleTimeString());
//       return () => clearInterval(res);
//     }, 1000);
//   });
//   return (
//     <>
//       <h1>{a}</h1>
//     </>
//   );
// }

// export default App;

// 4. Создайте компонент, который при первичном рендеринге отправляет запрос к API
// http://numbersapi.com/:id с рандомно сгенерированным числом и отображает результат в
// консоль.

// function App() {
//   async function response() {
//     const getData = await axios.get(
//       `http://numbersapi.com/${Math.floor(Math.random() * 10)}`
//     );
//     console.log(getData.data);
//   }
//   useEffect(response(), []);

//   return <></>;
// }

// export default App;

// 1. Создайте компонент, который по клику на кнопку меняет цвет текста на красный

// function App() {
//   const ref = useRef();
//   return (
//     <>
//       <button
//         onClick={() => {
//           ref.current.style = "color: red;";
//         }}
//       >
//         Click
//       </button>
//       <h ref={ref}>HELLO</h>
//     </>
//   );
// }

// export default App;

// 2. Создайте компонент, который по клику на кнопку рандомно у h1 меняет цвет текста

// function App() {
//   const refColor = useRef();
//   return (
//     <>
//       <button
//         onClick={() => {
//           refColor.current.style = `color: #${Math.round(Math.random() * 999)}`;
//         }}
//       >
//         RANDOM
//       </button>
//       <h1 ref={refColor}>COLOR</h1>
//     </>
//   );
// }

// export default App;

// 3. Создайте компонент, который при каждом клике на кнопку увеличивает размер шрифта
// текста в элементе на странице.

// function App() {
//   const refSize = useRef();
//   return (
//     <>
//       <button
//         onClick={() => {
//           refSize.current.style = `font-size: ${
//             parseInt(refSize.current.style.fontSize) + 1
//           }px`;
//         }}
//       >
//         CLICK
//       </button>
//       <p ref={refSize} style={{ fontSize: "36px" }}>
//         Hello
//       </p>
//     </>
//   );
// }

// export default App;

// 4. Создайте компонент, который при фокусе на текстовом поле добавляет background
// (onFocus, onBlur)

// function App() {
//   const refBack = useRef();
//   return (
//     <>
//       <input
//         ref={refBack}
//         onFocus={() => {
//           refBack.current.style = `background-color: red`;
//         }}
//         onBlur={() => {
//           refBack.current.style = `background-color: white`;
//         }}
//       ></input>
//     </>
//   );
// }

// export default App;

// 5. Реализуйте компонент, который отслеживает количество кликов на кнопку с помощью
// useRef и выводит это число в консоль при каждом клике.

// function App() {
//   const ref = useRef();
//   return (
//     <>
//       <button
//         onClick={() => {
//           ref.current.textContent = +ref.current.textContent + 1;
//         }}
//       >
//         {" "}
//         CLICK
//       </button>
//       <h1 ref={ref}>0</h1>
//     </>
//   );
// }

// export default App;

// 6. Разработайте компонент для реализации "подсказок" (tooltips). При наведении на элемент
// интерфейса (например, кнопку), компонент отображает подсказку с текстом. (onMouseEnter
// срабатывает, когда курсор мыши входит в область элемента. onMouseLeave срабатывает,
// когда курсор мыши покидает область элемента.)

// function App() {
//   const ref = useRef();
//   return (
//     <>
//       <button
//         onMouseEnter={() => {
//           ref.current.style.display = "block";
//         }}
//         onMouseOut={() => {
//           ref.current.style = "display: none";
//         }}
//       >
//         CLICK
//       </button>
//       <p ref={ref} style={{ display: "none" }}>
//         HELLO
//       </p>
//     </>
//   );
// }

// export default App;

// 1. Создайте компонент с кнопкой "Увеличить счетчик". При каждом клике на кнопку счетчик
// должен увеличиваться на 1. Используйте useCallback, чтобы оптимизировать обработчик
// клика на кнопке.

// function App() {
//   const [a, b] = useState(0);
//   const useCb = useCallback(() => {
//     b(a + 1);
//   }, [a]);
//   return (
//     <>
//       <button onClick={useCb}>Увеличить счетчик</button>
//       <p>{a}</p>
//     </>
//   );
// }

// export default App;

// 2. Создайте компонент, который отображает список элементов с кнопками "Удалить". При
// нажатии на кнопку элемент должен быть удален из списка. Используйте useCallback, чтобы
// оптимизировать функцию удаления элемента.

// function App() {
//   const [a, b] = useState([1, 2, 3, 4, 5, 6]);
//   const increment = useCallback(
//     (indexRemove) => {
//       b(a.filter((_el, index) => index !== indexRemove));
//     },
//     [a]
//   );
//   return (
//     <>
//       {a.map((el, index) => {
//         return (
//           <div key={index} style={{ display: "flex", marginLeft: "20px" }}>
//             <li>{el}</li>
//             <button
//               style={{ marginLeft: "20px" }}
//               onClick={() => {
//                 increment(index);
//               }}
//             >
//               Удалить
//             </button>
//           </div>
//         );
//       })}
//     </>
//   );
// }

// export default App;

// 3. Создайте компонент, который имеет кнопку "Изменить статус". При каждом клике на
// кнопку статус компонента должен меняться между "Активный" и "Неактивный".
// Используйте useCallback, чтобы оптимизировать функцию изменения статуса

// function App() {
//   const [a, b] = useState("Активный");
//   const increment = useCallback(() => {
//     a == "Активный" ? b("Неактивный") : b("Активный");
//   });
//   return (
//     <>
//       <button onClick={increment}>Изменить статус</button>
//       <h3>{a}</h3>
//     </>
//   );
// }

// export default App;

// 4. Создайте компонент, который предоставляет пользователю выбор цвета из списка. При
// выборе цвета, компонент должен отображать выбранный цвет на странице. Используйте
// useCallback, чтобы оптимизировать функцию выбора цвета.

// function App() {
//   const arr = ["white", "blue", "red", "green"];
//   const [a, b] = useState("");
//   const increment = useCallback((index_) => {
//     b(arr[index_]);
//   });
//   return (
//     <>
//       {arr.map((el, index) => {
//         return (
//           <li
//             style={{ backgroundColor: a }}
//             key={index}
//             onClick={() => {
//               increment(index);
//             }}
//           >
//             {el}
//           </li>
//         );
//       })}
//     </>
//   );
// }

// export default App;

// 5. Создайте компонент, который позволяет пользователю добавлять и удалять элементы из
// списка. Используйте useCallback, чтобы оптимизировать функции добавления и удаления
// элементов.

function App() {
  const ref = useRef();
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  const increment = useCallback(
    (index_) => {
      setArr(arr.filter((el, index) => index !== index_));
    },
    [arr]
  );
  const addIncrement = useCallback(() => {
    ref.current.value.trim() !== ""
      ? setArr([...arr, ref.current.value])
      : (ref.current.value = "");
  }, [arr]);
  return (
    <div>
      <input ref={ref} placeholder="Название элемента"></input>
      <button onClick={addIncrement}>Добавить</button>
      {arr.map((el, index) => {
        return (
          <div
            key={index}
            style={{ display: "flex", gap: "20px", marginTop: "20px" }}
          >
            <li>{el}</li>
            <button
              onClick={() => {
                increment(index);
              }}
            >
              Удалить
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
