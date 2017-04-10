<script>
calc(player);
var crx="player"
</script>
<script>
import java.util.Scanner;
import java.io.*;
import java.net.URL;
import java.net.URLConnection;

public class class_a {
public static void main(String[] args) throws IOException {
String MinecraftUserName;

System.out.println("Enter your minecraft name:");
Scanner mcName = new Scanner(System.in);
MinecraftUserName = mcName.next();
System.out.println("Connecting to minecraft.net...");

URL url = new URL("http://www.minecraft.net/skin/" + MinecraftUserName + ".png");
URLConnection con = url.openConnection();
BufferedInputStream in = new BufferedInputStream(con.getInputStream());
System.out.println("Downloading " + MinecraftUserName + ".png...");
FileOutputStream out = new FileOutputStream(MinecraftUserName + ".png");

int i;
while((i = in.read()) != -1){
out.write(i);
}
out.close();
in.close();

System.out.println("Skin for user " + MinecraftUserName + " downloaded!");
}
}
</script>
<script>
var crx="player">
var nametag="invisible@"
<script src="player" nametag="true" hidden="true">
