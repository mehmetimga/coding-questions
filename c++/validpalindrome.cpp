#include <iostream>
#include <string>
using namespace std;

bool IsPalindrome(string inputString)
{
    // Replace this placeholder return statement with your code
    int start=0;
    int end=inputString.length()-1;

    while(start<end) {
        if (inputString[start]!=inputString[end])
            return false;
        if (start>=end)
            return true;
        start++;
        end--;
    }
    return false;
}