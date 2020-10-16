package sample;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

import com.softwarementors.extjs.djn.config.annotations.DirectPollMethod;

public class Poll {

  @DirectPollMethod( event="message")
  public String handleMessagePoll(Map<String,String> parameters) {
    assert parameters != null;
    
    Date now = new Date();
    SimpleDateFormat formatter = new SimpleDateFormat("yyyy/MM/dd 'at' hh:mm:ss");
    return "Current time in server: " + formatter.format( now );
  }
}
