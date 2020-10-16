
package sample;

import java.util.*;
import com.softwarementors.extjs.djn.config.annotations.DirectMethod;

public class Grid {
    public static class Message {
        private Long id = 1L;
        private String title = "title";
        private String content = "content";

        public Message(Long id, String title, String content) {
            this.id = id;
            this.title = title;
            this.content = content;
        }
    }

    @DirectMethod
    public List<Message> getResult() {
        List<Message> messages = new ArrayList<Message>();
        messages.add(new Message(1L, "title 1", "content 1"));
        messages.add(new Message(2L, "title 2", "content 2"));
        messages.add(new Message(3L, "title 3", "content 3"));
        messages.add(new Message(4L, "title 4", "content 4"));
        messages.add(new Message(5L, "title 5", "content 5"));

        return messages;
    }
}
