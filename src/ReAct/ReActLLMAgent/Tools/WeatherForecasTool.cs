namespace SimpleLLMAgents.Tools;

public class WeatherForecastTool : ITool
{
    public string Name => "WeatherForecastTool";

    public string Description => "Get the weather forecast for a city";

    public string Execute(string inputText)
    {
        return "27°";    
    }
}