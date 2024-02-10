public class HelloASL {

    public static void main(String[] args) {
        String greeting = "Hello ASL!";
        String date = java.time.LocalDate.now().toString();

        System.out.println(greeting + " Today's date is: " + date);
    }
}