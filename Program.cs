// See https://aka.ms/new-console-template for more information
using System.Linq;
using System.Reflection;

class Program
{
	private static string[] GenerateUniqueMethodsList(Type type) 
	{
		List<string> uniqueMethods = new List<string>();

		foreach (var method in type.GetMethods())
		{
			var methodName = method.Name;

			if (uniqueMethods.IndexOf(methodName) == -1)
			{
				uniqueMethods.Add(methodName);
			}
		}

		return uniqueMethods.ToArray();
	}

	private static string Camelize(string methodName) 
	{
		var cached = methodName.ToCharArray();
		return cached[0].ToString().ToLower() + string.Join(string.Empty, cached.Skip(1));
	}

	private static void GenerateTemplateFrom(Type module, string moduleName)
	{
		foreach (var methodName in GenerateUniqueMethodsList(module))
		{
			var camelized = Camelize(methodName);
			Console.WriteLine(
				$"function {camelized}(args) {{\n" +
				$"  return {moduleName}.{methodName}(...args);\n" +
				"}\n"
			);
		}

		Console.WriteLine("export default {");
		foreach (var methodName in GenerateUniqueMethodsList(module))
		{
			var camelized = Camelize(methodName);
			Console.WriteLine($"  {camelized},");
		}
		Console.WriteLine("}\n");
	}

	public static void Main(string[] args)
	{
		GenerateTemplateFrom(typeof(System.Net.HttpListener), "System.Net.Http.HttpListener");
	}
}