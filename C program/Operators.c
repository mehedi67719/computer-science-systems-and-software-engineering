#include <stdio.h>;
int main()
{
    // Assignment Operators

    int sum1 = 10;
    int sum2 = sum1 + 250; // Addition
    int sum3 = sum2 - 50;  //-operator

    int Multiplicationvalue = sum1 * sum2; // Multiplication
    int Divisionvalue = sum2 / sum3;       // Division
    int Modulusvalue = sum2 % sum1;        // Modulus

    printf("%d", Multiplicationvalue, Divisionvalue, Modulusvalue);

    // Comparison Operators

    int x = 5;
    int y = 3;
    printf("%d", x > y);

    int age = 18;

    printf("%d\n", age >= 18);
    printf("%d\n", age < 18);

    int passwordLength = 5;

    printf("%d\n", passwordLength >= 8);
    printf("%d\n", passwordLength < 8);

    // C Logical Operators

    int a = 1;
    int b = 1;

    printf("%d\n", a && b);
    printf("%d\n", a || b);
    printf("%d", !a);

    // Operator Precedence

    int result1 = 2 + 3 * 4;   
    int result2 = (2 + 3) * 4; 

    printf("%d\n", result1);
    printf("%d\n", result2);

    return 0;
}