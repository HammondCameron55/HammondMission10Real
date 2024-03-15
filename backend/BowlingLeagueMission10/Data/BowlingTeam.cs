using System.ComponentModel.DataAnnotations;

namespace BowlingLeagueMission10.Data
{
    public class BowlingTeam
    {
        [Key]
        public int TeamID { get; set; }
        public string TeamName { get; set; }

        public string CaptainID { get; set; }

        // This is the navigation property
        public ICollection<BowlerInfo> Bowlers { get; set; }
    }
}
