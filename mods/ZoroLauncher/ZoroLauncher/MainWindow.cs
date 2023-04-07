using System;
using System.ComponentModel;
using System.Diagnostics;
using System.Drawing;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading;
using System.Windows.Forms;
using bgt5lms;

namespace ZoroLauncher
{
	// Token: 0x02000005 RID: 5
	public partial class MainWindow : Form
	{
		// Token: 0x06000011 RID: 17
		[DllImport("kernel32")]
		private static extern long WritePrivateProfileString(string section, string key, string val, string filePath);

		// Token: 0x06000012 RID: 18
		[DllImport("kernel32.dll", CharSet = CharSet.Unicode)]
		private static extern uint GetPrivateProfileString(string lpAppName, string lpKeyName, string lpDefault, StringBuilder lpReturnedString, uint nSize, string lpFileName);

		// Token: 0x06000013 RID: 19 RVA: 0x00002083 File Offset: 0x00000283
		private void Startup()
		{
			this.StartGame();
		}

		// Token: 0x06000014 RID: 20 RVA: 0x0000208B File Offset: 0x0000028B
		private void MainWindow_Closeing(object sender, EventArgs e)
		{
			this.closeWindow();
		}

		// Token: 0x06000015 RID: 21 RVA: 0x00002093 File Offset: 0x00000293
		private void MainWindow_Load(object sender, EventArgs e)
		{
		}

		// Token: 0x06000018 RID: 24 RVA: 0x000020B4 File Offset: 0x000002B4
		private void GameKey()
		{
			if (this.t5mp != null)
			{
				Game.Start(this.t5mp);
			}
		}

		// Token: 0x06000019 RID: 25 RVA: 0x000020C9 File Offset: 0x000002C9
		private void startHostMode()
		{
			if (!this.hostmode)
			{
				BGT5LMS.Start(3074);
				return;
			}
		}

		// Token: 0x0600001A RID: 26 RVA: 0x00003048 File Offset: 0x00001248
		public void StartThread()
		{
			try
			{
				new Thread(new ThreadStart(this.Startup)).Start();
			}
			catch (Exception)
			{
			}
		}

		// Token: 0x0600001B RID: 27 RVA: 0x000020DE File Offset: 0x000002DE
		private void StartGame()
		{
			this.StartGame("BlackOps", 1, this.gamemode);
		}

		// Token: 0x0600001C RID: 28 RVA: 0x00003080 File Offset: 0x00001280
		public void StartServer()
		{
			try
			{
				string fileName = "Server.exe";
				string arguments = "+set dedicated 2 +set sv_licensenum 0 +set net_port 27960 +exec server.cfg";
				Process.Start(fileName, arguments);
			}
			catch
			{
			}
		}

		// Token: 0x0600001D RID: 29 RVA: 0x000020F2 File Offset: 0x000002F2
		private void closeWindow()
		{
			if (this.hostmode)
			{
				BGT5LMS.Stop();
				return;
			}
			this.t5mp = null;
			this.Dispose(true);
			Thread.Sleep(100);
			Application.Exit();
		}

		// Token: 0x0600001E RID: 30 RVA: 0x0000211C File Offset: 0x0000031C
		private void start_Click(object sender, EventArgs e)
		{
			this.startHostMode();
			this.GameKey();
			this.StartServer();
			this.StartThread();
		}

		// Token: 0x0600001F RID: 31 RVA: 0x000030B4 File Offset: 0x000012B4
		public MainWindow(bool server, int gamemode)
		{
			this.gamemode = gamemode;
			if (server || gamemode != 0)
			{
				try
				{
					this.silence();
					this.startHostMode();
					this.GameKey();
					if (server)
					{
						this.StartServer();
					}
					this.StartThread();
					this.silence();
					return;
				}
				catch (Exception)
				{
					this.silence();
					Thread.Sleep(1000);
					this.silence();
					this.startHostMode();
					this.GameKey();
					if (server)
					{
						this.StartServer();
					}
					this.StartThread();
					this.silence();
					return;
				}
			}
			this.InitializeComponent();
			base.ShowInTaskbar = true;
			base.StartPosition = FormStartPosition.CenterScreen;
			base.Visible = true;
			base.Activate();
		}

		// Token: 0x06000020 RID: 32 RVA: 0x00003174 File Offset: 0x00001374
		private void StartGame(string exec, int player, int gamemode)
		{
			try
			{
				string str = ".exe";
				string str2 = "";
				if (player != 0)
				{
					str2 = " - Player " + player.ToString();
				}
				if (gamemode != 2)
				{
					exec += "MP";
				}
				this.t5mp = Process.Start(exec + str2 + str);
				Game.Start(this.t5mp);
				base.Visible = false;
				this.t5mp.WaitForExit();
				this.closeWindow();
			}
			catch (Exception)
			{
				if (player < 9)
				{
					this.StartGame(exec, checked(player + 1), gamemode);
				}
				else
				{
					this.closeWindow();
				}
			}
		}

		// Token: 0x06000021 RID: 33 RVA: 0x00002136 File Offset: 0x00000336
		private void silence()
		{
			base.Visible = false;
		}

		// Token: 0x0400000F RID: 15
		public bool hostmode;

		// Token: 0x04000010 RID: 16
		public Form pic = new LoadG();

		// Token: 0x04000011 RID: 17
		private Process t5mp;

		// Token: 0x04000015 RID: 21
		public int gamemode;
	}
}
