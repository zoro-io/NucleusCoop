using System;
using System.CodeDom.Compiler;
using System.ComponentModel;
using System.Diagnostics;
using System.Drawing;
using System.Globalization;
using System.Resources;
using System.Runtime.CompilerServices;

namespace ZoroLauncher.Properties
{
	// Token: 0x0200000D RID: 13
	[GeneratedCode("System.Resources.Tools.StronglyTypedResourceBuilder", "15.0.0.0")]
	[DebuggerNonUserCode]
	[CompilerGenerated]
	internal class Resources
	{
		// Token: 0x06000042 RID: 66 RVA: 0x000021FF File Offset: 0x000003FF
		internal Resources()
		{
		}

		// Token: 0x17000001 RID: 1
		// (get) Token: 0x06000043 RID: 67 RVA: 0x00002207 File Offset: 0x00000407
		[EditorBrowsable(EditorBrowsableState.Advanced)]
		internal static ResourceManager ResourceManager
		{
			get
			{
				if (Resources.resourceMan == null)
				{
					Resources.resourceMan = new ResourceManager("ZoroLauncher.Properties.Resources", typeof(Resources).Assembly);
				}
				return Resources.resourceMan;
			}
		}

		// Token: 0x17000002 RID: 2
		// (get) Token: 0x06000044 RID: 68 RVA: 0x00002236 File Offset: 0x00000436
		// (set) Token: 0x06000045 RID: 69 RVA: 0x0000223D File Offset: 0x0000043D
		[EditorBrowsable(EditorBrowsableState.Advanced)]
		internal static CultureInfo Culture
		{
			get
			{
				return Resources.resourceCulture;
			}
			set
			{
				Resources.resourceCulture = value;
			}
		}

		// Token: 0x17000003 RID: 3
		// (get) Token: 0x06000046 RID: 70 RVA: 0x00002245 File Offset: 0x00000445
		internal static Bitmap BOlolgo
		{
			get
			{
				return (Bitmap)Resources.ResourceManager.GetObject("BOlolgo", Resources.resourceCulture);
			}
		}

		// Token: 0x0400003A RID: 58
		private static ResourceManager resourceMan;

		// Token: 0x0400003B RID: 59
		private static CultureInfo resourceCulture;
	}
}
