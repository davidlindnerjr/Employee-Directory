# Employee Tracker [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Employee tracker is an application that allows the use to filter and view their employees based on the department. For example, if the user selects "All" then all of the employees will be shown, if "Management" is selected then the employees in the management department will be shown, etc. The employee is displayed with a picture of the employee, their role in the company, and the department they fall under.

The application utilizes React to dynamically render the employees depending on the user selection. The employees are rendered by using the "useState" and "useEffect" hooks; I found it to be the most graceful way to go about using only one function to get the input value of the user, sending it to the useState and setting the new filtered "employees" array from there. useEffect allowed me to render all of the employees by default when the application first loads.

So far I am having a lot of fun with React; I can easily say that it is my favorite thing that I have leanred in this bootcamp as of yet and am very excited to learn more about it.

## Screenshots

![Employee Directory - Google Chrome 11_9_2020 6_30_52 PM](https://user-images.githubusercontent.com/65383133/98620339-fa62b880-22b9-11eb-93b8-b8e1c0c82d48.png)
![Employee Directory - Google Chrome 11_9_2020 6_31_32 PM](https://user-images.githubusercontent.com/65383133/98620344-fc2c7c00-22b9-11eb-87df-65cbecf5bb20.png)
![Employee Directory - Google Chrome 11_9_2020 6_31_40 PM](https://user-images.githubusercontent.com/65383133/98620348-fe8ed600-22b9-11eb-9179-9cfdf9482660.png)
![Employee Directory - Google Chrome 11_9_2020 6_31_49 PM](https://user-images.githubusercontent.com/65383133/98620351-00589980-22ba-11eb-8bb3-5746d6ea266b.png)

## Deployed Application

* https://davidlindnerjr.github.io/Employee-Directory/

## License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright (c) 2020 David Lindner

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


