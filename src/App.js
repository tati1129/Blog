
import Header from "./components/Header/Header"
import Content from "./components/Content/Content"
import Total from "./components/Total/Total"

const App = () => {
  const course = 'Frontend Pro';
  const part1 = 'Вводные занятия по React'
  const tasks1 = 10;
  const part2 = 'Использование React хуков'
  const tasks2 = 5;
  const part3 = 'Использование библиотеки react-router-dom'
  const tasks3 = 15;
  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} tasks1={tasks1} tasks2={tasks2} tasks3={tasks3}/>
      <Total  tasks1={tasks1} tasks2={tasks2} tasks3={tasks3}/>
    </div>
  );
}

export default App;

//состояние - данные (переменные), с которыми работает и от которых зависит компонент
//компонет - это ф-ция, которая возвращает нам jsx