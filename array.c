#include<stdio.>

int main()
{
    int no;
    printf("Enter the number: \n");
    scanf("%d\n",&no);

    if(no % 2 == 0)
    {
        printf("even\n");
    }
    else
    {
        printf("odd\n");
    }
    return 0;
}