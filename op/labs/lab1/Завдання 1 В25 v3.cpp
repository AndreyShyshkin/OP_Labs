#include <cmath> // бібліотека математичних функцій
#include <iostream> // бібліотека потоків вводу-виводу
#include <string>   // для роботи з рядками
using namespace std;

bool isValidInput(double &x)
{
  if (cin >> x)
  {
    return true;
  }
  cin >> ws;
  return false;
}

int main() {
  cout << "---------------------------------------" << endl;
  cout << "Лабораторна робота №1" << endl;
  cout << "Студент Шишкін Андрій Антонович, ІПЗ-11, Варіант 25" << endl;
  cout << "Завдання 1. За даними, що введені з клавіатури в оперативну "
          "пам’ять, визначити значення виразу, використовуючи математичні "
          "функції, і вивести результат на екран. Вираз вибрати згідно з "
          "варіантом 25. Довільні значення змінних A,B,C,D ввести з клавіатури."
       << endl;
  cout << "X=sin^3 C Cos^2 A / (e^A + 1 + SinB)" << endl;
  cout << "---------------------------------------" << endl;

  double A, B, C;

  cout << "Введіть a: ";
  while (!isValidInput(A))
  {
    cout << "Помилка ввода! Будьласка, введіть коректне число для a: ";
  }

  cout << "Введіть b: ";
  while (!isValidInput(B))
  {
    cout << "Помилка ввода! Будьласка, введіть коректне число для b: ";
  }

  cout << "Введіть c: ";
  while (!isValidInput(C))
  {
    cout << "Помилка ввода! Будьласка, введіть коректне число для c: ";
  }

  // Обчислення виразу
  double X = pow(sin(C), 3) * pow(cos(A), 2) / (exp(A) + 1 + sin(B));

  // Виведення результату
  cout << "Результат обчислення X = " << X << endl;
  return 0;
}
