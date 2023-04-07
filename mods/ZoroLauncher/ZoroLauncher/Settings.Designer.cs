namespace ZoroLauncher
{
	// Token: 0x02000003 RID: 3
	public partial class Settings : global::System.Windows.Forms.Form
	{
		// Token: 0x0600000B RID: 11 RVA: 0x00002880 File Offset: 0x00000A80
		protected override void Dispose(bool disposing)
		{
			bool flag = disposing && this.components != null;
			if (flag)
			{
				this.components.Dispose();
			}
			base.Dispose(disposing);
		}

		// Token: 0x0600000C RID: 12 RVA: 0x000028B8 File Offset: 0x00000AB8
		private void InitializeComponent()
		{
			this.label1 = new global::System.Windows.Forms.Label();
			this.tBgameID = new global::System.Windows.Forms.TextBox();
			this.bChange = new global::System.Windows.Forms.Button();
			base.SuspendLayout();
			this.label1.AutoSize = true;
			this.label1.Location = new global::System.Drawing.Point(12, 9);
			this.label1.Name = "label1";
			this.label1.Size = new global::System.Drawing.Size(49, 13);
			this.label1.TabIndex = 0;
			this.label1.Text = "GameID:";
			this.tBgameID.BorderStyle = global::System.Windows.Forms.BorderStyle.None;
			this.tBgameID.Location = new global::System.Drawing.Point(67, 9);
			this.tBgameID.MaxLength = 10;
			this.tBgameID.Name = "tBgameID";
			this.tBgameID.Size = new global::System.Drawing.Size(197, 13);
			this.tBgameID.TabIndex = 1;
			this.bChange.BackColor = global::System.Drawing.Color.Black;
			this.bChange.FlatStyle = global::System.Windows.Forms.FlatStyle.Flat;
			this.bChange.Font = new global::System.Drawing.Font("Consolas", 9.75f, global::System.Drawing.FontStyle.Regular, global::System.Drawing.GraphicsUnit.Point, 0);
			this.bChange.ForeColor = global::System.Drawing.Color.FromArgb(0, 192, 0);
			this.bChange.ImageAlign = global::System.Drawing.ContentAlignment.MiddleRight;
			this.bChange.Location = new global::System.Drawing.Point(270, 4);
			this.bChange.Name = "bChange";
			this.bChange.Size = new global::System.Drawing.Size(19, 23);
			this.bChange.TabIndex = 2;
			this.bChange.Text = "✔";
			this.bChange.UseVisualStyleBackColor = false;
			this.bChange.Click += new global::System.EventHandler(this.bChange_Click);
			base.AutoScaleDimensions = new global::System.Drawing.SizeF(6f, 13f);
			base.AutoScaleMode = global::System.Windows.Forms.AutoScaleMode.Font;
			this.BackColor = global::System.Drawing.Color.Silver;
			base.ClientSize = new global::System.Drawing.Size(301, 32);
			base.Controls.Add(this.bChange);
			base.Controls.Add(this.tBgameID);
			base.Controls.Add(this.label1);
			base.FormBorderStyle = global::System.Windows.Forms.FormBorderStyle.FixedToolWindow;
			base.Name = "Settings";
			base.StartPosition = global::System.Windows.Forms.FormStartPosition.CenterScreen;
			this.Text = "Set GameID";
			base.TopMost = true;
			base.Load += new global::System.EventHandler(this.GameID_Load);
			base.ResumeLayout(false);
			base.PerformLayout();
		}

		// Token: 0x04000009 RID: 9
		private global::System.ComponentModel.IContainer components = null;

		// Token: 0x0400000A RID: 10
		private global::System.Windows.Forms.Label label1;

		// Token: 0x0400000B RID: 11
		private global::System.Windows.Forms.TextBox tBgameID;

		// Token: 0x0400000C RID: 12
		private global::System.Windows.Forms.Button bChange;
	}
}
