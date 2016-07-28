var Resources;
(function (Resources) {
    Resources.ItemData = {
        Weight: null,
        Flags: null,
        Height: null,
        Quality: null,
        Quantity: null,
        AnimID: null,
        Value: null,
        Name: null,
        IsStairs: null,
        Unknown1: null,
        Unknown2: null,
        Unknown3: null,
        Unknown4: null,
        get IsBackground() {
            return (this.Flags & 1) != 0;
        },
        get IsBridge() {
            return (this.Flags & 1024) != 0;
        },
        get CalcHeight() {
            if ((this.Flags & 1024) != 0) {
                return this.Height;
            }
            else {
                return this.Height;
            }
        },
        get IsAnimation() {
            return (this.Flags & 16777216) != 0;
        },
        get IsContainer() {
            return (this.Flags & 2097152) != 0;
        },
        get IsFoliage() {
            return (this.Flags & 131072) != 0;
        },
        get IsGeneric() {
            return (this.Flags & 2048) != 0;
        },
        get IsImpassable() {
            return (this.Flags & 64) != 0;
        },
        get IsLightSource() {
            return (this.Flags & 8388608) != 0;
        },
        get IsPartialHue() {
            return (this.Flags & 262144) != 0;
        },
        get IsRoof() {
            return (this.Flags & 268435456) != 0;
        },
        get IsDoor() {
            return (this.Flags & 536870912) != 0;
        },
        get IsSurface() {
            return (this.Flags & 512) != 0;
        },
        get IsWall() {
            return (this.Flags & 16) != 0;
        },
        get IsWearable() {
            return (this.Flags & 4194304) != 0;
        },
        get IsWet() {
            return (this.Flags & 128) != 0;
        }
    };
    class LandData {
        get isWet() {
            return (this.Flags & 128) != 0;
        }
        ;
        get isImpassible() {
            return (this.Flags & 64) != 0;
        }
        ;
    }
    Resources.LandData = LandData;
    class TileData {
    }
    TileData.LandData = k;
    Resources.TileData = TileData;
    number;
    new Resources.LandData[4000];
})(Resources || (Resources = {}));
//# sourceMappingURL=TileData.js.map