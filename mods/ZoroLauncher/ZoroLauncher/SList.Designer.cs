namespace ZoroLauncher
{
	// Token: 0x0200000C RID: 12
	public partial class SList : global::System.Windows.Forms.Form
	{
		// Token: 0x0600003F RID: 63 RVA: 0x000036B0 File Offset: 0x000018B0
		protected override void Dispose(bool disposing)
		{
			bool flag = disposing && this.components != null;
			if (flag)
			{
				this.components.Dispose();
			}
			base.Dispose(disposing);
		}

		// Token: 0x06000040 RID: 64 RVA: 0x000036E8 File Offset: 0x000018E8
		private void InitializeComponent()
		{
			this.LBservers = new global::System.Windows.Forms.ListBox();
			this.Brefresh = new global::System.Windows.Forms.Button();
			this.Bconnect = new global::System.Windows.Forms.Button();
			this.L1 = new global::System.Windows.Forms.Label();
			this.Lsnum = new global::System.Windows.Forms.Label();
			this.textBox1 = new global::System.Windows.Forms.TextBox();
			base.SuspendLayout();
			this.LBservers.FormattingEnabled = true;
			this.LBservers.Location = new global::System.Drawing.Point(12, 12);
			this.LBservers.Name = "LBservers";
			this.LBservers.Size = new global::System.Drawing.Size(280, 95);
			this.LBservers.TabIndex = 0;
			this.Brefresh.Location = new global::System.Drawing.Point(136, 113);
			this.Brefresh.Name = "Brefresh";
			this.Brefresh.Size = new global::System.Drawing.Size(75, 23);
			this.Brefresh.TabIndex = 1;
			this.Brefresh.Text = "Refresh";
			this.Brefresh.UseVisualStyleBackColor = true;
			this.Brefresh.Click += new global::System.EventHandler(this.Brefresh_Click);
			this.Bconnect.Location = new global::System.Drawing.Point(217, 113);
			this.Bconnect.Name = "Bconnect";
			this.Bconnect.Size = new global::System.Drawing.Size(75, 23);
			this.Bconnect.TabIndex = 2;
			this.Bconnect.Text = "Connect";
			this.Bconnect.UseVisualStyleBackColor = true;
			this.Bconnect.Click += new global::System.EventHandler(this.Bconnect_Click);
			this.L1.AutoSize = true;
			this.L1.Location = new global::System.Drawing.Point(12, 113);
			this.L1.Name = "L1";
			this.L1.Size = new global::System.Drawing.Size(55, 13);
			this.L1.TabIndex = 3;
			this.L1.Text = "Servers:";
			this.Lsnum.AutoSize = true;
			this.Lsnum.Location = new global::System.Drawing.Point(64, 113);
			this.Lsnum.Name = "Lsnum";
			this.Lsnum.Size = new global::System.Drawing.Size(13, 13);
			this.Lsnum.TabIndex = 4;
			this.Lsnum.Text = "0";
			this.textBox1.Location = new global::System.Drawing.Point(97, -1);
			this.textBox1.Name = "textBox1";
			this.textBox1.Size = new global::System.Drawing.Size(100, 20);
			this.textBox1.TabIndex = 5;
			base.AutoScaleDimensions = new global::System.Drawing.SizeF(6f, 13f);
			base.AutoScaleMode = global::System.Windows.Forms.AutoScaleMode.Font;
			this.BackColor = global::System.Drawing.Color.Silver;
			base.ClientSize = new global::System.Drawing.Size(300, 136);
			base.ControlBox = false;
			base.Controls.Add(this.textBox1);
			base.Controls.Add(this.Lsnum);
			base.Controls.Add(this.L1);
			base.Controls.Add(this.Bconnect);
			base.Controls.Add(this.Brefresh);
			base.Controls.Add(this.LBservers);
			this.Font = new global::System.Drawing.Font("Consolas", 8.25f, global::System.Drawing.FontStyle.Regular, global::System.Drawing.GraphicsUnit.Point, 0);
			this.ForeColor = global::System.Drawing.Color.White;
			base.FormBorderStyle = global::System.Windows.Forms.FormBorderStyle.FixedSingle;
			base.MaximizeBox = false;
			base.MinimizeBox = false;
			base.Name = "SList";
			base.Opacity = 0.9;
			base.ShowIcon = false;
			base.ShowInTaskbar = false;
			base.StartPosition = global::System.Windows.Forms.FormStartPosition.CenterScreen;
			this.Text = "Server List";
			base.TopMost = true;
			base.FormClosing += new global::System.Windows.Forms.FormClosingEventHandler(this.SList_Closing);
			base.ResumeLayout(false);
			base.PerformLayout();
		}

		// Token: 0x04000033 RID: 51
		private global::System.ComponentModel.IContainer components = null;

		// Token: 0x04000034 RID: 52
		private global::System.Windows.Forms.ListBox LBservers;

		// Token: 0x04000035 RID: 53
		private global::System.Windows.Forms.Button Brefresh;

		// Token: 0x04000036 RID: 54
		private global::System.Windows.Forms.Button Bconnect;

		// Token: 0x04000037 RID: 55
		private global::System.Windows.Forms.Label L1;

		// Token: 0x04000038 RID: 56
		private global::System.Windows.Forms.Label Lsnum;

		// Token: 0x04000039 RID: 57
		private global::System.Windows.Forms.TextBox textBox1;
	}
}
