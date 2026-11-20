#include <stdio.h>

int main()
{
    int num = 15;
    num = 10; // value change
    int myOtherNum = 23;
    float myfloat = 5.99;
    char myletter = 'M';
    num = myOtherNum; // value change

    int x = 5;
    int y = 6;
    int sum = x + y;

    printf("%d\n", num);
    printf("%f\n", myfloat);
    printf("%c/n", myletter);
    printf("My number is %d and my letter is %c", num, myletter);
    printf("%d/n", sum);
    return 0;
}
