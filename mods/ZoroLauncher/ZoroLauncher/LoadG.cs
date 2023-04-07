using System;
using System.ComponentModel;
using System.Drawing;
using System.Windows.Forms;
using bgt5lms;
using ZoroLauncher.Properties;

namespace ZoroLauncher
{
	// Token: 0x02000004 RID: 4
	public partial class LoadG : Form
	{
		// Token: 0x0600000D RID: 13 RVA: 0x00002B64 File Offset: 0x00000D64
		public LoadG()
		{
			this.InitializeComponent();
			this.BackgroundImageLayout = ImageLayout.Stretch;
			this.BackgroundImage = Resources.BOlolgo;
			base.ShowInTaskbar = false;
			base.StartPosition = FormStartPosition.CenterScreen;
			base.MouseClick += this.CloseWindow;
		}

		// Token: 0x0600000E RID: 14 RVA: 0x00002BC0 File Offset: 0x00000DC0
		private void CloseWindow(object sender, MouseEventArgs e)
		{
			bool flag = e.Button != MouseButtons.Right;
			if (!flag)
			{
				try
				{
					BGT5LMS.Stop();
				}
				catch
				{
				}
				Application.Exit();
			}
		}
	}
}
