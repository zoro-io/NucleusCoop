namespace ZoroLauncher
{
	// Token: 0x02000005 RID: 5
	public partial class MainWindow : global::System.Windows.Forms.Form
	{
		// Token: 0x06000016 RID: 22 RVA: 0x00002095 File Offset: 0x00000295
		protected override void Dispose(bool disposing)
		{
			if (disposing && this.components != null)
			{
				this.components.Dispose();
			}
			base.Dispose(disposing);
		}

		// Token: 0x06000017 RID: 23 RVA: 0x00002D88 File Offset: 0x00000F88
		private void InitializeComponent()
		{
			global::System.ComponentModel.ComponentResourceManager componentResourceManager = new global::System.ComponentModel.ComponentResourceManager(typeof(global::ZoroLauncher.MainWindow));
			this.start = new global::System.Windows.Forms.Button();
			this.statusStrip1 = new global::System.Windows.Forms.StatusStrip();
			this.label3 = new global::System.Windows.Forms.Label();
			base.SuspendLayout();
			this.start.BackColor = global::System.Drawing.Color.Transparent;
			this.start.FlatStyle = global::System.Windows.Forms.FlatStyle.Flat;
			this.start.ForeColor = global::System.Drawing.Color.White;
			this.start.Location = new global::System.Drawing.Point(75, 50);
			this.start.Name = "start";
			this.start.Size = new global::System.Drawing.Size(150, 50);
			this.start.TabIndex = 1;
			this.start.Text = "Play";
			this.start.UseVisualStyleBackColor = false;
			this.start.Click += new global::System.EventHandler(this.start_Click);
			this.label3.AutoSize = true;
			this.label3.BackColor = global::System.Drawing.Color.Transparent;
			this.label3.Font = new global::System.Drawing.Font("Consolas", 8.25f, global::System.Drawing.FontStyle.Regular, global::System.Drawing.GraphicsUnit.Point, 0);
			this.label3.ForeColor = global::System.Drawing.Color.WhiteSmoke;
			this.label3.Location = new global::System.Drawing.Point(55, 150);
			this.label3.Name = "label3";
			this.label3.Size = new global::System.Drawing.Size(200, 50);
			this.label3.TabIndex = 2;
			this.label3.Text = "by Die_Rache | Mod by Zoronic";
			this.label3.TextAlign = global::System.Drawing.ContentAlignment.MiddleCenter;
			base.AutoScaleDimensions = new global::System.Drawing.SizeF(16f, 9f);
			base.AutoScaleMode = global::System.Windows.Forms.AutoScaleMode.Font;
			this.BackColor = global::System.Drawing.Color.DarkOliveGreen;
			this.BackgroundImage = (global::System.Drawing.Image)componentResourceManager.GetObject("$this.BackgroundImage");
			this.BackgroundImageLayout = global::System.Windows.Forms.ImageLayout.Stretch;
			base.ClientSize = new global::System.Drawing.Size(300, 200);
			base.Controls.Add(this.label3);
			base.Controls.Add(this.start);
			this.Font = new global::System.Drawing.Font("Consolas", 9.75f, global::System.Drawing.FontStyle.Regular, global::System.Drawing.GraphicsUnit.Point, 0);
			base.FormBorderStyle = global::System.Windows.Forms.FormBorderStyle.FixedSingle;
			base.Icon = (global::System.Drawing.Icon)componentResourceManager.GetObject("$this.Icon");
			base.MaximizeBox = false;
			base.MinimizeBox = false;
			base.Name = "MainWindow";
			this.Text = "ZoroLauncher";
			base.TopMost = true;
			base.FormClosing += new global::System.Windows.Forms.FormClosingEventHandler(this.MainWindow_Closeing);
			base.Load += new global::System.EventHandler(this.MainWindow_Load);
			this.statusStrip1.ResumeLayout(false);
			this.statusStrip1.PerformLayout();
			base.ResumeLayout(false);
			base.PerformLayout();
		}

		// Token: 0x04000012 RID: 18
		private global::System.ComponentModel.IContainer components;

		// Token: 0x04000013 RID: 19
		private global::System.Windows.Forms.StatusStrip statusStrip1;

		// Token: 0x04000014 RID: 20
		private global::System.Windows.Forms.Label label3;

		// Token: 0x04000016 RID: 22
		private global::System.Windows.Forms.Button start;
	}
}
