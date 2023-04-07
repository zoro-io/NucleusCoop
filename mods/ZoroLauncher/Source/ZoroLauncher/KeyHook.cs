using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Runtime.InteropServices;
using System.Windows.Forms;

namespace ZoroLauncher
{
	// Token: 0x02000008 RID: 8
	internal class KeyHook
	{
		// Token: 0x14000001 RID: 1
		// (add) Token: 0x06000028 RID: 40 RVA: 0x00003264 File Offset: 0x00001464
		// (remove) Token: 0x06000029 RID: 41 RVA: 0x0000329C File Offset: 0x0000149C
		[DebuggerBrowsable(DebuggerBrowsableState.Never)]
		public event KeyEventHandler KeyDown;

		// Token: 0x14000002 RID: 2
		// (add) Token: 0x0600002A RID: 42 RVA: 0x000032D4 File Offset: 0x000014D4
		// (remove) Token: 0x0600002B RID: 43 RVA: 0x0000330C File Offset: 0x0000150C
		[DebuggerBrowsable(DebuggerBrowsableState.Never)]
		public event KeyEventHandler KeyUp;

		// Token: 0x0600002C RID: 44 RVA: 0x00002167 File Offset: 0x00000367
		public KeyHook()
		{
			this.hook();
		}

		// Token: 0x0600002D RID: 45 RVA: 0x00003344 File Offset: 0x00001544
		~KeyHook()
		{
			this.unhook();
		}

		// Token: 0x0600002E RID: 46 RVA: 0x00003374 File Offset: 0x00001574
		public void hook()
		{
			this._hookProc = new KeyHook.keyboardHookProc(this.hookProc);
			IntPtr hInstance = KeyHook.LoadLibrary("User32");
			this.hhook = KeyHook.SetWindowsHookEx(13, this._hookProc, hInstance, 0U);
		}

		// Token: 0x0600002F RID: 47 RVA: 0x0000218E File Offset: 0x0000038E
		public void unhook()
		{
			KeyHook.UnhookWindowsHookEx(this.hhook);
		}

		// Token: 0x06000030 RID: 48 RVA: 0x000033B4 File Offset: 0x000015B4
		public int hookProc(int code, int wParam, ref KeyHook.keyboardHookStruct lParam)
		{
			bool flag = code >= 0;
			if (flag)
			{
				Keys vkCode = (Keys)lParam.vkCode;
				bool flag2 = this.HookedKeys.Contains(vkCode);
				if (flag2)
				{
					KeyEventArgs keyEventArgs = new KeyEventArgs(vkCode);
					bool flag3 = (wParam == 256 || wParam == 260) && this.KeyDown != null;
					if (flag3)
					{
						this.KeyDown(this, keyEventArgs);
					}
					else
					{
						bool flag4 = (wParam == 257 || wParam == 261) && this.KeyUp != null;
						if (flag4)
						{
							this.KeyUp(this, keyEventArgs);
						}
					}
					bool handled = keyEventArgs.Handled;
					if (handled)
					{
						return 1;
					}
				}
			}
			return KeyHook.CallNextHookEx(this.hhook, code, wParam, ref lParam);
		}

		// Token: 0x06000031 RID: 49
		[DllImport("user32.dll")]
		private static extern IntPtr SetWindowsHookEx(int idHook, KeyHook.keyboardHookProc callback, IntPtr hInstance, uint threadId);

		// Token: 0x06000032 RID: 50
		[DllImport("user32.dll")]
		private static extern bool UnhookWindowsHookEx(IntPtr hInstance);

		// Token: 0x06000033 RID: 51
		[DllImport("user32.dll")]
		private static extern int CallNextHookEx(IntPtr idHook, int nCode, int wParam, ref KeyHook.keyboardHookStruct lParam);

		// Token: 0x06000034 RID: 52
		[DllImport("kernel32.dll")]
		private static extern IntPtr LoadLibrary(string lpFileName);

		// Token: 0x04000022 RID: 34
		private const int WH_KEYBOARD_LL = 13;

		// Token: 0x04000023 RID: 35
		private const int WM_KEYDOWN = 256;

		// Token: 0x04000024 RID: 36
		private const int WM_KEYUP = 257;

		// Token: 0x04000025 RID: 37
		private const int WM_SYSKEYDOWN = 260;

		// Token: 0x04000026 RID: 38
		private const int WM_SYSKEYUP = 261;

		// Token: 0x04000027 RID: 39
		public List<Keys> HookedKeys = new List<Keys>();

		// Token: 0x04000028 RID: 40
		private IntPtr hhook = IntPtr.Zero;

		// Token: 0x0400002B RID: 43
		private KeyHook.keyboardHookProc _hookProc;

		// Token: 0x02000009 RID: 9
		// (Invoke) Token: 0x06000036 RID: 54
		public delegate int keyboardHookProc(int code, int wParam, ref KeyHook.keyboardHookStruct lParam);

		// Token: 0x0200000A RID: 10
		public struct keyboardHookStruct
		{
			// Token: 0x0400002C RID: 44
			public int vkCode;

			// Token: 0x0400002D RID: 45
			public int scanCode;

			// Token: 0x0400002E RID: 46
			public int flags;

			// Token: 0x0400002F RID: 47
			public int time;

			// Token: 0x04000030 RID: 48
			public int dwExtraInfo;
		}
	}
}
