var Ultima;
(function (Ultima) {
    var Data;
    (function (Data) {
        (function (TileFlag) {
            TileFlag[TileFlag["None"] = 0] = "None";
            TileFlag[TileFlag["Background"] = 1] = "Background";
            TileFlag[TileFlag["Weapon"] = 2] = "Weapon";
            TileFlag[TileFlag["Transparent"] = 4] = "Transparent";
            TileFlag[TileFlag["Translucent"] = 8] = "Translucent";
            TileFlag[TileFlag["Wall"] = 16] = "Wall";
            TileFlag[TileFlag["Damaging"] = 32] = "Damaging";
            TileFlag[TileFlag["Impassable"] = 64] = "Impassable";
            TileFlag[TileFlag["Wet"] = 128] = "Wet";
            TileFlag[TileFlag["Unknown1"] = 256] = "Unknown1";
            TileFlag[TileFlag["Surface"] = 512] = "Surface";
            TileFlag[TileFlag["Bridge"] = 1024] = "Bridge";
            TileFlag[TileFlag["Generic"] = 2048] = "Generic";
            TileFlag[TileFlag["Window"] = 4096] = "Window";
            TileFlag[TileFlag["NoShoot"] = 8192] = "NoShoot";
            TileFlag[TileFlag["ArticleA"] = 16384] = "ArticleA";
            TileFlag[TileFlag["ArticleAn"] = 32768] = "ArticleAn";
            TileFlag[TileFlag["Internal"] = 65536] = "Internal";
            TileFlag[TileFlag["Foliage"] = 131072] = "Foliage";
            TileFlag[TileFlag["PartialHue"] = 262144] = "PartialHue";
            TileFlag[TileFlag["Unknown2"] = 524288] = "Unknown2";
            TileFlag[TileFlag["Map"] = 1048576] = "Map";
            TileFlag[TileFlag["Container"] = 2097152] = "Container";
            TileFlag[TileFlag["Wearable"] = 4194304] = "Wearable";
            TileFlag[TileFlag["LightSource"] = 8388608] = "LightSource";
            TileFlag[TileFlag["Animation"] = 16777216] = "Animation";
            TileFlag[TileFlag["NoDiagonal"] = 33554432] = "NoDiagonal";
            TileFlag[TileFlag["Unknown3"] = 67108864] = "Unknown3";
            TileFlag[TileFlag["Armor"] = 134217728] = "Armor";
            TileFlag[TileFlag["Roof"] = 268435456] = "Roof";
            TileFlag[TileFlag["Door"] = 536870912] = "Door";
            TileFlag[TileFlag["StairBack"] = 1073741824] = "StairBack";
            TileFlag[TileFlag["StairRight"] = 2147483648] = "StairRight";
        })(Data.TileFlag || (Data.TileFlag = {}));
        var TileFlag = Data.TileFlag;
    })(Data = Ultima.Data || (Ultima.Data = {}));
})(Ultima || (Ultima = {}));
//# sourceMappingURL=TileFlags.js.map