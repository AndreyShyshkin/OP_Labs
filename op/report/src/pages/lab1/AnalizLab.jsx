import Analiz from '../../components/Analiz/Analiz'

export default function AnalizLab() {
	return (
		<Analiz
			analizText={
				<div>
					<div>
						<p>
							<p className='text-sky-500'>Аналіз Завдання 1:</p>
							Необхідно розробити програму, яка приймає з клавіатури значення
							змінних A, B, C , обчислює вираз за допомогою математичних функцій
							і вивить результат на екран.
							<br />
							Кроки виконання:
							<ol className='list-decimal'>
								<li>
									Введення даних: Програма повинна зчитувати значення чотирьох
									змінних типу A, B, C з клавіатури.
								</li>
								<li>
									Обчислення виразу: Вираз для обчислення не вказаний, тому його
									необхідно задати або уточнити у формулюні завдання.
								</li>
								<li>
									Використання математичних функцій: як синус (sin()), косинус
									(cos()), квадратний корінь (sqrt()),степені тощо.
								</li>
								<li>
									Виведення результату: Після обчислення результат необхідно
									вивести на екран.
								</li>
							</ol>
						</p>
					</div>
					<div>
						<p>
							<p className='text-sky-500'>Аналіз Завдання 1:</p>
							Задача полягає в тому, щоб знайти меншу діагональ ромба,
							використовуючи інформацію про його периметр і властивості висоти,
							проведеної з вершини тупого кута. Відомі дані: 1. Пиметр ромба
							введений з клавіатури. 2 Висотаба, проведена з вершини тупого
							кута, ділить сторону навпіл. Необхідно знайти: Меншу діагональ
							ромба. Необхідно знайти: Меншу діагональ ромба . Геометричні
							властивості та формули: 1. Ромб — це чотирикутник, у якому всі
							сторони рівні. Тому для сторони ромба можна записати: P = 4a де —
							a довжина сторони. 2. Якщо висота ділить сторону навпіл (вона є
							медіаною), то ми можемо розглядати утворені трикутники як
							прямокутні. 3. Довжину меншої діагоналі можна визначити через
							теорему Піфагора в одному із цих прямокутних трикутників: ▪
							Гіпотенуза: сторона ромба a. ▪ Один катет: половина меншої
							діагоналі (d1/2). ▪ Другий катет: половина більшої діагоналі
							(d2/2=h), де висота h=a/2, оскільки вона ділить сторону навпіл.
						</p>
					</div>
				</div>
			}
		/>
	)
}
