/// <reference path="TileFlags.ts" />

namespace Resources {
  export class ItemData {
    Weight: number;
    Flags: Ultima.Data.TileFlag;
    Height: number;
    Quality: number;
    Quantity: number;
    AnimID: number;
    Value: number;
    Name: string;
    IsStairs: string;
    Unknown1: number; //byte
    Unknown2: number; //byte
    Unknown3: number; //byte
    Unknown4: number; //byte
    get IsBackground(): boolean {
      return (this.Flags & Ultima.Data.TileFlag.Background) != 0;
    }
    get IsBridge(): boolean {
      return (this.Flags & Ultima.Data.TileFlag.Bridge) != 0;
    }
    get CalcHeight(): number {
      if ((this.Flags & Ultima.Data.TileFlag.Bridge) != 0) {
        return this.Height; // / 2;
      }
      else {
        return this.Height;
      }
    }
    get IsAnimation(): boolean {
      return (this.Flags & Ultima.Data.TileFlag.Animation) != 0;
    }
    get IsContainer(): boolean {
      return (this.Flags & Ultima.Data.TileFlag.Container) != 0;
    }
    get IsFoliage(): boolean {
      return (this.Flags & Ultima.Data.TileFlag.Foliage) != 0;
    }
    get IsGeneric(): boolean {
      return (this.Flags & Ultima.Data.TileFlag.Generic) != 0;
    }
    get IsImpassable(): boolean {
      return (this.Flags & Ultima.Data.TileFlag.Impassable) != 0;
    }
    get IsLightSource(): boolean {
      return (this.Flags & Ultima.Data.TileFlag.LightSource) != 0;
    }
    get IsPartialHue(): boolean {
      return (this.Flags & Ultima.Data.TileFlag.PartialHue) != 0;
    }
    get IsRoof(): boolean {
      return (this.Flags & Ultima.Data.TileFlag.Roof) != 0;
    }
    get IsDoor(): boolean {
      return (this.Flags & Ultima.Data.TileFlag.Door) != 0;
    }
    get IsSurface(): boolean {
      return (this.Flags & Ultima.Data.TileFlag.Surface) != 0;
    }
    get IsWall(): boolean {
      return (this.Flags & Ultima.Data.TileFlag.Wall) != 0;
    }
    get IsWearable(): boolean {
      return (this.Flags & Ultima.Data.TileFlag.Wearable) != 0;
    }
    get IsWet(): boolean {
      return (this.Flags & Ultima.Data.TileFlag.Wet) != 0;
    }
  }

  export class LandData {
    Flags: Ultima.Data.TileFlag;
    TextureID: number;
    get isWet(): boolean {
      return (this.Flags & Ultima.Data.TileFlag.Wet) != 0;
    };
    get isImpassible(): boolean {
      return (this.Flags & Ultima.Data.TileFlag.Impassable) != 0;
    };
  }

  export class TileData {
    static LandData: LandData[] = new LandData(4000);
    static ItemData: ItemData[] = new ItemData(4000);

    static ItemData_ByAnimID(animID: number): ItemData {
      for (var i = 0; i < this.ItemData.length; ++i) {
        if (this.ItemData[i].AnimID === animID) {
          return ItemData[i];
        }
      }
      return new ItemData();
    }

    // Issue 5 - Statics (bridge, stairs, etc) should be walkable - http://code.google.com/p/ultimaxna/issues/detail?id=5 - Smjert
    // Stairs IDs, taken from RunUO Data folder (stairs.txt)
    private static m_StairsID: number[] = [
      1006, 1007, 1008, 1009, 1010, 1012, 1014, 1016, 1017,
      1801, 1802, 1803, 1804, 1805, 1807, 1809, 1811, 1812,
      1822, 1823, 1825, 1826, 1827, 1828, 1829, 1831, 1833,
      1835, 1836, 1846, 1847, 1848, 1849, 1850, 1851, 1852,
      1854, 1856, 1861, 1862, 1865, 1867, 1869, 1872, 1873,
      1874, 1875, 1876, 1878, 1880, 1882, 1883, 1900, 1901,
      1902, 1903, 1904, 1906, 1908, 1910, 1911, 1928, 1929,
      1930, 1931, 1932, 1934, 1936, 1938, 1939, 1955, 1956,
      1957, 1958, 1959, 1961, 1963, 1978, 1979, 1980, 1991,
      7600, 7601, 7602, 7603, 7604, 7605, 7606, 7607, 7608,
      7609, 7610, 7611, 7612, 7613, 7614, 7615, 7616, 7617,
      7618, 7619, 7620, 7621, 7622, 7623, 7624, 7625, 7626,
      7627, 7628, 7629, 7630, 7631, 7632, 7633, 7634, 7635,
      7636, 7639
    ];
    // Issue 5 - End

    constructor(): void {
      // using(FileStream fileStream = FileManager.GetFile("tiledata.mul"))
      // {
      //   BinaryReader bin = new BinaryReader(fileStream);

        let landData: LandData;
        let itemData: ItemData;

        // if (fileStream.Length == 3188736) { // 7.0.9.0
          this.LandData = new LandData(4000);

          for (var i = 0; i < 4000; ++i)
          {
            landData = new LandData();

            if (i == 1 || (i > 0 && (i & 0x1F) == 0)) {
              bin.ReadInt32();
            }

            TileFlag flags = (TileFlag)bin.ReadInt64();

            int iTextureID = bin.ReadInt16();

            bin.BaseStream.Seek(20, SeekOrigin.Current);

            landData.Flags = flags;
            landData.TextureID = iTextureID;

            LandData[i] = landData;
          }

          ItemData = new ItemData[0x10000];

          for (int i = 0; i < 0x10000; ++i)
          {
            itemData = new ItemData();

            if ((i & 0x1F) == 0) {
              bin.ReadInt32();
            }

            itemData.Flags = (TileFlag)bin.ReadInt64();
            itemData.Weight = bin.ReadByte();
            itemData.Quality = bin.ReadByte();

            itemData.Unknown1 = bin.ReadByte();
            itemData.Unknown2 = bin.ReadByte();
            itemData.Unknown3 = bin.ReadByte();

            itemData.Quantity = bin.ReadByte();
            itemData.AnimID = bin.ReadInt16();

            bin.BaseStream.Seek(2, SeekOrigin.Current); // hue?
            itemData.Unknown4 = bin.ReadByte();

            itemData.Value = bin.ReadByte();
            itemData.Height = bin.ReadByte();

            itemData.Name = ASCIIEncoding.ASCII.GetString((bin.ReadBytes(20)));
            itemData.Name = itemData.Name.Trim('\0');
            // binaryReader.BaseStream.Seek(20, SeekOrigin.Current);

            // Issue 5 - Statics (bridge, stairs, etc) should be walkable - http://code.google.com/p/ultimaxna/issues/detail?id=5 - Smjert
            if (i > 1005 && i < 7640)
              itemData.IsStairs = !(Array.BinarySearch(m_StairsID, i) < 0);
            // Issue 5 - End

            ItemData[i] = itemData;
          }
        }
        else {
          LandData = new LandData[0x4000];

          for (int i = 0; i < 0x4000; ++i)
          {

            landData = new LandData();

            if ((i & 0x1F) == 0) {
              bin.ReadInt32();
            }

            TileFlag flags = (TileFlag)bin.ReadInt32();

            int iTextureID = bin.ReadInt16();

            bin.BaseStream.Seek(20, SeekOrigin.Current);

            landData.Flags = flags;
            landData.TextureID = iTextureID;

            LandData[i] = landData;
          }

          if (fileStream.Length == 1644544) { // 7.0.0.0
            ItemData = new ItemData[0x8000];

            for (int i = 0; i < 0x8000; ++i)
            {
              itemData = new ItemData();

              if ((i & 0x1F) == 0) {
                bin.ReadInt32();
              }

              itemData.Flags = (TileFlag)bin.ReadInt32();
              itemData.Weight = bin.ReadByte();
              itemData.Quality = bin.ReadByte();

              itemData.Unknown1 = bin.ReadByte();
              itemData.Unknown2 = bin.ReadByte();
              itemData.Unknown3 = bin.ReadByte();

              itemData.Quantity = bin.ReadByte();
              itemData.AnimID = bin.ReadInt16();

              bin.BaseStream.Seek(2, SeekOrigin.Current); // hue?
              itemData.Unknown4 = bin.ReadByte();

              itemData.Value = bin.ReadByte();
              itemData.Height = bin.ReadByte();

              itemData.Name = ASCIIEncoding.ASCII.GetString((bin.ReadBytes(20)));
              itemData.Name = itemData.Name.Trim('\0');
              // binaryReader.BaseStream.Seek(20, SeekOrigin.Current);

              // Issue 5 - Statics (bridge, stairs, etc) should be walkable - http://code.google.com/p/ultimaxna/issues/detail?id=5 - Smjert
              if (i > 1005 && i < 7640)
                itemData.IsStairs = !(Array.BinarySearch(m_StairsID, i) < 0);
              // Issue 5 - End

              ItemData[i] = itemData;
            }
          }
          else {
            ItemData = new ItemData[0x4000];

            for (int i = 0; i < 0x4000; ++i)
            {
              itemData = new ItemData();

              if ((i & 0x1F) == 0) {
                bin.ReadInt32();
              }

              itemData.Flags = (TileFlag)bin.ReadInt32();
              itemData.Weight = bin.ReadByte();
              itemData.Quality = bin.ReadByte();

              itemData.Unknown1 = bin.ReadByte();
              itemData.Unknown2 = bin.ReadByte();
              itemData.Unknown3 = bin.ReadByte();

              itemData.Quantity = bin.ReadByte();
              itemData.AnimID = bin.ReadInt16();

              bin.BaseStream.Seek(2, SeekOrigin.Current); // hue?
              itemData.Unknown4 = bin.ReadByte();

              itemData.Value = bin.ReadByte();
              itemData.Height = bin.ReadByte();

              itemData.Name = ASCIIEncoding.ASCII.GetString((bin.ReadBytes(20)));
              itemData.Name = itemData.Name.Trim('\0');
              // binaryReader.BaseStream.Seek(20, SeekOrigin.Current);

              // Issue 5 - Statics (bridge, stairs, etc) should be walkable - http://code.google.com/p/ultimaxna/issues/detail?id=5 - Smjert
              if (i > 1005 && i < 7640)
                itemData.IsStairs = !(Array.BinarySearch(m_StairsID, i) < 0);
              // Issue 5 - End

              ItemData[i] = itemData;
            }
          }
        }

        Metrics.ReportDataRead((int)bin.BaseStream.Position);
      }
    }
  }
}