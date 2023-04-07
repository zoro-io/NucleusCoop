namespace ZoroLauncher
{
	// Token: 0x02000002 RID: 2
	public partial class Dediset : global::System.Windows.Forms.Form
	{
		// Token: 0x06000004 RID: 4 RVA: 0x000022A4 File Offset: 0x000004A4
		protected override void Dispose(bool disposing)
		{
			bool flag = disposing && this.components != null;
			if (flag)
			{
				this.components.Dispose();
			}
			base.Dispose(disposing);
		}

		// Token: 0x06000005 RID: 5 RVA: 0x000022DC File Offset: 0x000004DC
		private void InitializeComponent()
		{
			this.label1 = new global::System.Windows.Forms.Label();
			this.label2 = new global::System.Windows.Forms.Label();
			this.label6 = new global::System.Windows.Forms.Label();
			this.TBhostname = new global::System.Windows.Forms.TextBox();
			this.TBmapro = new global::System.Windows.Forms.TextBox();
			this.CBgametype = new global::System.Windows.Forms.ComboBox();
			this.button1 = new global::System.Windows.Forms.Button();
			base.SuspendLayout();
			this.label1.AutoSize = true;
			this.label1.Location = new global::System.Drawing.Point(12, 5);
			this.label1.Name = "label1";
			this.label1.Size = new global::System.Drawing.Size(70, 15);
			this.label1.TabIndex = 0;
			this.label1.Text = "Hostname:";
			this.label2.AutoSize = true;
			this.label2.Location = new global::System.Drawing.Point(12, 34);
			this.label2.Name = "label2";
			this.label2.Size = new global::System.Drawing.Size(91, 15);
			this.label2.TabIndex = 1;
			this.label2.Text = "Maprotation:";
			this.label6.AutoSize = true;
			this.label6.Location = new global::System.Drawing.Point(12, 64);
			this.label6.Name = "label6";
			this.label6.Size = new global::System.Drawing.Size(70, 15);
			this.label6.TabIndex = 5;
			this.label6.Text = "Gametype:";
			this.TBhostname.Location = new global::System.Drawing.Point(109, 2);
			this.TBhostname.Name = "TBhostname";
			this.TBhostname.Size = new global::System.Drawing.Size(166, 23);
			this.TBhostname.TabIndex = 6;
			this.TBhostname.Text = "^4BGamer Server";
			this.TBmapro.Location = new global::System.Drawing.Point(109, 31);
			this.TBmapro.Name = "TBmapro";
			this.TBmapro.Size = new global::System.Drawing.Size(166, 23);
			this.TBmapro.TabIndex = 7;
			this.TBmapro.Text = "default";
			this.CBgametype.FormattingEnabled = true;
			this.CBgametype.Items.AddRange(new object[]
			{
				"war",
				"dm",
				"sd"
			});
			this.CBgametype.Location = new global::System.Drawing.Point(109, 61);
			this.CBgametype.Name = "CBgametype";
			this.CBgametype.Size = new global::System.Drawing.Size(166, 23);
			this.CBgametype.TabIndex = 10;
			this.CBgametype.Text = "war";
			this.button1.BackColor = global::System.Drawing.Color.Transparent;
			this.button1.FlatStyle = global::System.Windows.Forms.FlatStyle.Flat;
			this.button1.Location = new global::System.Drawing.Point(73, 90);
			this.button1.Name = "button1";
			this.button1.Size = new global::System.Drawing.Size(270, 62);
			this.button1.TabIndex = 11;
			this.button1.Text = "Start Dedicated Server";
			this.button1.UseVisualStyleBackColor = false;
			this.button1.Click += new global::System.EventHandler(this.button1_Click);
			base.AutoScaleDimensions = new global::System.Drawing.SizeF(7f, 15f);
			base.AutoScaleMode = global::System.Windows.Forms.AutoScaleMode.Font;
			this.BackColor = global::System.Drawing.SystemColors.ButtonShadow;
			base.ClientSize = new global::System.Drawing.Size(422, 171);
			base.Controls.Add(this.button1);
			base.Controls.Add(this.CBgametype);
			base.Controls.Add(this.TBmapro);
			base.Controls.Add(this.TBhostname);
			base.Controls.Add(this.label6);
			base.Controls.Add(this.label2);
			base.Controls.Add(this.label1);
			this.Font = new global::System.Drawing.Font("Consolas", 9.75f, global::System.Drawing.FontStyle.Regular, global::System.Drawing.GraphicsUnit.Point, 0);
			base.FormBorderStyle = global::System.Windows.Forms.FormBorderStyle.FixedSingle;
			base.MaximizeBox = false;
			base.MinimizeBox = false;
			base.Name = "Dediset";
			base.ShowInTaskbar = false;
			this.Text = "Dedicated Server Settings";
			base.Load += new global::System.EventHandler(this.Dediset_Load);
			base.ResumeLayout(false);
			base.PerformLayout();
		}

		// Token: 0x04000001 RID: 1
		private global::System.ComponentModel.IContainer components = null;

		// Token: 0x04000002 RID: 2
		private global::System.Windows.Forms.Label label1;

		// Token: 0x04000003 RID: 3
		private global::System.Windows.Forms.Label label2;

		// Token: 0x04000004 RID: 4
		private global::System.Windows.Forms.Label label6;

		// Token: 0x04000005 RID: 5
		private global::System.Windows.Forms.TextBox TBhostname;

		// Token: 0x04000006 RID: 6
		private global::System.Windows.Forms.TextBox TBmapro;

		// Token: 0x04000007 RID: 7
		private global::System.Windows.Forms.ComboBox CBgametype;

		// Token: 0x04000008 RID: 8
		private global::System.Windows.Forms.Button button1;
	}
}
