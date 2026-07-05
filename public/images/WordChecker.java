// Online Java Compiler
// Use this editor to write, compile and run your Java code online

import java.util.ArrayList;

public class WordChecker
{
/** Initialized in the constructor and contains no null elements */
private ArrayList<String> wordList = new ArrayList<String>();
/**
* Returns true if each element of wordList (except the first) contains the previous
* element as a substring and returns false otherwise, as described in part (a)
* Precondition: wordList contains at least two elements.
* Postcondition: wordList is unchanged.
*/

/**
* Returns an ArrayList<String> based on strings from wordList that start
* with target, as described in part (b). Each element of the returned ArrayList has had
* the initial occurrence of target removed.
* Postconditions: wordList is unchanged.
* Items appear in the returned list in the same order as they appear in wordList.
*/
public ArrayList<String> createList(String target)
{/*to be implemented in part (b) */ 
// There may be instance variables, constructors, and
//wordList = ["catch", "bobcat", "catchacat", "cat", "at"];
wordList.add("catch");
wordList.add("bobcat");
wordList.add("catchacat");
wordList.add("cat");
wordList.add("at");
System.out.println(wordList);


ArrayList<String> result = new ArrayList<String>();
for (String current : wordList)
{
if (current.indexOf(target) == 0)
{
String newStr = current.substring(target.length());
result.add(newStr);
}
}
return result;

}

    public static void main(String[] args) {
        WordChecker wc = new WordChecker();
        System.out.println("Calling class");
        ArrayList<String> newList = wc.createList("cat");
        System.out.println(newList);
        
    }
}