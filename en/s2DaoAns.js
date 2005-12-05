﻿//  array of correct answers(order in the array is unimportant)
    ans = new Array("Table3", "Column3", "ColumnNothing4", "N1Mapping2", "Bean1", 
                    "Args2", "ManyArgs2","Interceptor4", "DefDicon4", "SQLFileName2", "Relno2", 
                    "Relkeys4", "Query3", "QuerySQLComment3", "DefInsert1", "DefUpdate4",
                    "DefDelete2","SQLComment3", "SQLIf4", "SQLBegin3", "EntityManagerClass2",
                    "EntityManagerArgs3", "EntityManagerFind3", "EntityManagerFindArray1","EntityManagerFindBean4", "EntityManagerFindObject2",
                     "AutoDef3", "BatchUpdate1", "AutoSelect3", "AutoSelect2_4", "AutoSelect3_4");
                    
function check(linkName,linkNextName){
    count = 0;
    message = "";
    //x initialize variables
    x = 0;
    for(i = 0; i<4; i++){
        if(document.myForm.elements["" + linkName][i].checked){
            if(answerCheck(document.myForm.elements["" + linkName][i].value)){
                message = "CORRECT!\nDo you want to view the explanation?";
                flag=confirm(message);
                if(flag){
                    location.href="s2DaoAns.html#" + linkName
                }
                else{
                    if(linkNextName != ""){
                        flag=confirm("Do you want to move to the next question?");
                        if(flag){
                            location.href = "#" + linkNextName
                        }
                    }
                }
            }
            else{
                message = "Try again.\nDo you want to view the explanation?";
                flag=confirm(message);
                if(flag){
                    location.href="s2DaoAns.html#" + linkName
                }
            }
            return true;
        }
        count = count + 1;
    }
    
    if(count == 4){
        alert("Please select an answer and select the 'Check' button.");
    }
}

function answerCheck(answer){
     
    for(i = 0 ; i<ans.length; i++){
        if(ans[i] == answer){
            return true;
        }
    }
    return false;
}