using System;
using System.Windows.Forms;

namespace ZoroLauncher
{
	// Token: 0x0200000B RID: 11
	internal static class Program
	{
		// Token: 0x06000039 RID: 57 RVA: 0x00003480 File Offset: 0x00001680
		[STAThread]
		private static void Main(string[] args)
		{
			Application.EnableVisualStyles();
			Application.SetCompatibleTextRenderingDefault(false);
			bool server = false;
			int gamemode = 0;
			try
			{
				foreach (string a in args)
				{
					if (a == "server")
					{
						server = true;
					}
					else if (a == "mp")
					{
						gamemode = 1;
					}
					else if (a == "zm")
					{
						gamemode = 2;
					}
				}
			}
			catch (Exception)
			{
				gamemode = 1;
			}
			Application.Run(new MainWindow(server, gamemode));
		}
	}
}
