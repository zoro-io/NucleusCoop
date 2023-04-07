using System;
using System.Diagnostics;
using System.Runtime.InteropServices;

namespace ZoroLauncher
{
	// Token: 0x02000006 RID: 6
	internal class Game
	{
		// Token: 0x06000022 RID: 34
		[DllImport("kernel32.dll")]
		private static extern IntPtr OpenProcess(Game.ProcessAccessFlags dwDesiredAccess, [MarshalAs(UnmanagedType.Bool)] bool bInheritHandle, int dwProcessId);

		// Token: 0x06000023 RID: 35
		[DllImport("kernel32.dll", SetLastError = true)]
		private static extern bool WriteProcessMemory(IntPtr hProcess, IntPtr lpBaseAddress, byte[] lpBuffer, uint nSize, out int lpNumberOfBytesWritten);

		// Token: 0x06000024 RID: 36
		[DllImport("kernel32.dll")]
		public static extern int CloseHandle(IntPtr hProcess);

		// Token: 0x06000025 RID: 37 RVA: 0x00003218 File Offset: 0x00001418
		private static void WriteMem(Process p, int address, long v)
		{
			IntPtr hProcess = Game.OpenProcess(Game.ProcessAccessFlags.All, false, p.Id);
			byte[] array = new byte[]
			{
				(byte)v
			};
			int num = 0;
			Game.WriteProcessMemory(hProcess, new IntPtr(address), array, (uint)((long)array.Length), out num);
			Game.CloseHandle(hProcess);
		}

		// Token: 0x06000026 RID: 38 RVA: 0x0000213F File Offset: 0x0000033F
		public static void Start(Process p)
		{
			Game.WriteMem(p, 94130980, 1L);
			Game.WriteMem(p, 94131056, 1L);
		}

		// Token: 0x02000007 RID: 7
		private enum ProcessAccessFlags : uint
		{
			// Token: 0x04000018 RID: 24
			All = 2035711U,
			// Token: 0x04000019 RID: 25
			Terminate = 1U,
			// Token: 0x0400001A RID: 26
			CreateThread,
			// Token: 0x0400001B RID: 27
			VMOperation = 8U,
			// Token: 0x0400001C RID: 28
			VMRead = 16U,
			// Token: 0x0400001D RID: 29
			VMWrite = 32U,
			// Token: 0x0400001E RID: 30
			DupHandle = 64U,
			// Token: 0x0400001F RID: 31
			SetInformation = 512U,
			// Token: 0x04000020 RID: 32
			QueryInformation = 1024U,
			// Token: 0x04000021 RID: 33
			Synchronize = 1048576U
		}
	}
}
