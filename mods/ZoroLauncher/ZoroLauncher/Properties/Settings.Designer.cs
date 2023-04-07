using System;
using System.CodeDom.Compiler;
using System.Configuration;
using System.Runtime.CompilerServices;

namespace ZoroLauncher.Properties
{
	// Token: 0x0200000E RID: 14
	[CompilerGenerated]
	[GeneratedCode("Microsoft.VisualStudio.Editors.SettingsDesigner.SettingsSingleFileGenerator", "15.5.0.0")]
	internal sealed partial class Settings : ApplicationSettingsBase
	{
		// Token: 0x17000004 RID: 4
		// (get) Token: 0x06000047 RID: 71 RVA: 0x00003B44 File Offset: 0x00001D44
		public static Settings Default
		{
			get
			{
				return Settings.defaultInstance;
			}
		}

		// Token: 0x0400003C RID: 60
		private static Settings defaultInstance = (Settings)SettingsBase.Synchronized(new Settings());
	}
}
