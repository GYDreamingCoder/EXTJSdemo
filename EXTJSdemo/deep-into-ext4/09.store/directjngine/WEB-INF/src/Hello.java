
package sample;

import com.softwarementors.extjs.djn.config.annotations.DirectMethod;

public class Hello {

    @DirectMethod
    public String doHello(String msg) {
        return "Hello " + msg;
    }

    @DirectMethod
    public Result getResult() {
        return new Result();
    }

    public static class Result {
        private boolean success = true;
        private String message = "success";
    }
}
