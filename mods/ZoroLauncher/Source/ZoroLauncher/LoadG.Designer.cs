namespace ZoroLauncher
{
	// Token: 0x02000004 RID: 4
	public partial class LoadG : global::System.Windows.Forms.Form
	{
		// Token: 0x0600000F RID: 15 RVA: 0x00002C0C File Offset: 0x00000E0C
		protected override void Dispose(bool disposing)
		{
			bool flag = disposing && this.components != null;
			if (flag)
			{
				this.components.Dispose();
			}
			base.Dispose(disposing);
		}

		// Token: 0x06000010 RID: 16 RVA: 0x00002C44 File Offset: 0x00000E44
		private void InitializeComponent()
		{
			this.label1 = new global::System.Windows.Forms.Label();
			base.SuspendLayout();
			this.label1.AutoSize = true;
			this.label1.BackColor = global::System.Drawing.Color.Transparent;
			this.label1.Font = new global::System.Drawing.Font("Consolas", 8.25f, global::System.Drawing.FontStyle.Regular, global::System.Drawing.GraphicsUnit.Point, 0);
			this.label1.ForeColor = global::System.Drawing.Color.White;
			this.label1.Location = new global::System.Drawing.Point(12, 9);
			this.label1.Name = "label1";
			this.label1.Size = new global::System.Drawing.Size(73, 13);
			this.label1.TabIndex = 0;
			this.label1.Text = "Loading....";
			base.AutoScaleDimensions = new global::System.Drawing.SizeF(6f, 13f);
			base.AutoScaleMode = global::System.Windows.Forms.AutoScaleMode.Font;
			base.ClientSize = new global::System.Drawing.Size(500, 226);
			base.Controls.Add(this.label1);
			base.FormBorderStyle = global::System.Windows.Forms.FormBorderStyle.None;
			base.Name = "LoadG";
			base.StartPosition = global::System.Windows.Forms.FormStartPosition.CenterScreen;
			this.Text = "Load";
			base.ResumeLayout(false);
			base.PerformLayout();
		}

		// Token: 0x0400000D RID: 13
		private global::System.ComponentModel.IContainer components = null;

		// Token: 0x0400000E RID: 14
		private global::System.Windows.Forms.Label label1;
	}
}
