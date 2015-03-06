package minechem.helper;

import java.util.List;
import net.minecraft.client.gui.FontRenderer;

public class StringHelper
{
    public static int getSplitStringHeight(FontRenderer fontRenderer, String string, int width)
    {
        List<?> stringRows = fontRenderer.listFormattedStringToWidth(string, width);
        return stringRows.size() * fontRenderer.FONT_HEIGHT;
    }

    /**
     * Concat all objects with given separator
     * @param separator eg. ", "
     * @param objects
     * @return one string
     */
    public static String toString(String separator, Object... objects)
    {
        StringBuilder result = new StringBuilder();
        for (Object object : objects)
        {
            result.append(String.valueOf(object)).append(separator);
        }
        return result.substring(0, result.length() - separator.length());
    }
}
