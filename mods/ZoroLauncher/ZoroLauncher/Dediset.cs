using System;
using System.ComponentModel;
using System.Diagnostics;
using System.Drawing;
using System.Windows.Forms;

namespace ZoroLauncher
{
	// Token: 0x02000002 RID: 2
	public partial class Dediset : Form
	{
		// Token: 0x06000001 RID: 1 RVA: 0x00002050 File Offset: 0x00000250
		public Dediset()
		{
			this.InitializeComponent();
		}

		// Token: 0x06000002 RID: 2 RVA: 0x00002068 File Offset: 0x00000268
		private void Dediset_Load(object sender, EventArgs e)
		{
		}

		// Token: 0x06000003 RID: 3 RVA: 0x00002280 File Offset: 0x00000480
		private void button1_Click(object sender, EventArgs e)
		{
			string fileName = "BlackOpsMP.exe";
			string arguments = " +set dedicated 2 +set sv_licensenum 0 +set net_port 27960 +exec server.cfg";
			Process.Start(fileName, arguments);
		}
	}
}
