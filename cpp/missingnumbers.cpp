#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

vector<int> missingNumbers(vector<int> arr, vector<int> brr) {
    sort(begin(arr),end(arr));
    sort(begin(brr),end(brr));
    vector<int> r;

    unordered_map<int, int> am;
    unordered_map<int, int> bm;
    for(auto i:arr){
        if (am.find(i)==am.end()){
            am[i]=1;
        }else{
            am[i]=am[i]+1;
        }
    }
    for(auto i:brr){
        if (bm.find(i)==bm.end()){
            bm[i]=1;
        }else{
            bm[i]=bm[i]+1;
        }
    }
    for(auto pair:am){
        auto it=bm.find(pair.first);
        if (it==am.end()){
            r.push_back(pair.first);
        }else if(pair.second!=it->second){
            r.push_back(pair.first);
        }
    }

    for(auto pair:bm){
        auto it=am.find(pair.first);
        if (it==am.end()){
            r.push_back(pair.first);
        }
    }
    sort(r.begin(),r.end());
    return r;
}

int main(){

    vector<int> a{203,204,205,206,207,208,203,204,205,206};
    vector<int> b{203,204,204,205,206,207,205,208,203,206,205,206,204};

    //vector<int> a{11,4,11,7,13,4,12,11,10,14};
    //vector<int> b{11,4,11,7,3,7,10,13,4,8,12,11,10,14,12};

    vector<int> c=missingNumbers(a,b);
    cout << "size:"<< c.size() << endl;
    for(auto i:c){
        cout << i << " " ;
    }
    return 0;
}

