using SimpleLLMAgents;
using SimpleLLMAgents.Tools;

var llm = new ChatLlm();

var agent = new ReActAgent(llm, new List<ITool> { new CalculatorTool(), new WeatherForecastTool() });
var response = await agent.Run("What is the weather like in Nürnberg?"); //"what is 3 + 5 / 7 * 9 ?");

Console.WriteLine("### " + response);