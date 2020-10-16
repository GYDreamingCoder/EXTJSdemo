
package sample;

import java.util.ArrayList;
import java.util.List;

import com.softwarementors.extjs.djn.config.annotations.DirectMethod;

public class TestAction {
  @DirectMethod
  public String doEcho( String data ) {
    return data;
  }
  
  @DirectMethod
  public double multiply( String num ) {
    double num_ = Double.parseDouble(num);
    return num_ * 8.0;
  }
  
  public static class Node {
    public String id;
    public String text;
    public boolean leaf;
  }
  
  @DirectMethod 
  public List<Node> getTree( String id ) {
    List<Node> result = new ArrayList<Node>();
    if( id.equals("root")) {
      for( int i = 1; i <= 5; ++i ) {
        Node node = new Node();
        node.id = "n" + i;
        node.text = "Node " + i;
        node.leaf = false;
        result.add(node);
      }
    }
    else if( id.length() == 2) {
      String num = id.substring(1);
      for( int i = 1; i <= 5; ++i ) {
        Node node = new Node();
        node.id = "id" + i;
        node.text = "Node " + num + "." + i;
        node.leaf = true;
        result.add(node);
      }
    }
    return result;
  }
}
