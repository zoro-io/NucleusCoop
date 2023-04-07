using System;
using System.ComponentModel;
using System.Drawing;
using System.Runtime.InteropServices;
using System.Text;
using System.Windows.Forms;

namespace ZoroLauncher
{
	// Token: 0x02000003 RID: 3
	public partial class Settings : Form
	{
		// Token: 0x06000006 RID: 6
		[DllImport("kernel32")]
		private static extern long WritePrivateProfileString(string section, string key, string val, string filePath);

		// Token: 0x06000007 RID: 7
		[DllImport("kernel32.dll", CharSet = CharSet.Unicode)]
		private static extern uint GetPrivateProfileString(string lpAppName, string lpKeyName, string lpDefault, StringBuilder lpReturnedString, uint nSize, string lpFileName);

		// Token: 0x06000008 RID: 8 RVA: 0x0000206B File Offset: 0x0000026B
		public Settings()
		{
			this.InitializeComponent();
		}

		// Token: 0x06000009 RID: 9 RVA: 0x00002790 File Offset: 0x00000990
		private void GameID_Load(object sender, EventArgs e)
		{
			StringBuilder stringBuilder = new StringBuilder(500);
			Settings.GetPrivateProfileString("Config", "GameID", "", stringBuilder, 256U, ".\\bgset.ini");
			this.tBgameID.Text = stringBuilder.ToString();
			this.label1.Select();
		}

		// Token: 0x0600000A RID: 10 RVA: 0x000027E8 File Offset: 0x000009E8
		private void bChange_Click(object sender, EventArgs e)
		{
			bool flag = this.tBgameID.Text != "";
			if (flag)
			{
				int num;
				bool flag2 = int.TryParse(this.tBgameID.Text, out num);
				if (flag2)
				{
					Settings.WritePrivateProfileString("Config", "GameID", this.tBgameID.Text, ".\\bgset.ini");
					base.Close();
				}
				else
				{
					MessageBox.Show("ID must be in Int32 format!", "Invalid!", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
				}
			}
			else
			{
				MessageBox.Show("No GameID inserted! If you came here buy mistake, just close the window.", "Invalid!", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
			}
		}
	}
}
