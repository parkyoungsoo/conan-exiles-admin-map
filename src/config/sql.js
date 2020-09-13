module.exports = {
  all: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%BP_PL_Altar%'
    or ap.class like '%BP_PL_Bed_%'
    or ap.class like '%BP_PL_Bedroll_%'
    or ap.class like '%BP_PL_Chair_Throne%'
    or ap.class like '%BP_PL_Crafting%'
    or ap.class like '%BuildFoundation%'
    or ap.class like '%BuildTriangleFoundation%'
    or ap.class like '%BP_PL_Chest%'
    or ap.class like '%BP_PL_Maproom%'
    or ap.class like '%BP_PL_Icebox%'
    or ap.class like '%BP_PL_Signpost%'
    or ap.class like '%BP_PL_Wallsign%'
    or ap.class like '%BP_PL_Water_Well%'
    or ap.class like '%BP_PL_WorkStation%'
    or ap.class like '%Trebuchet_V2%'
    or ap.class like '%Pippi%'
  `,
  altars: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%BP_PL_Altar%'
  `,
  animalpens: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%BP_PL_Crafting_Station_AnimalPen%'
    or ap.class like '%bp_pl_pen%'
    or ap.class like '%VA_BP_PL_Crafting_Station_Etables_C%'
  `,
  buildings: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%BuildFoundation%'
    or ap.class like '%BuildTriangleFoundation%'
  `,
  beds: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%BP_PL_Bedroll_%'
    or ap.class like '%BP_PL_Bed_%'
  `,
  campfires: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%BP_PL_Crafting_CampFire%'
    or ap.class like '%BP_PL_Crafting_Bonfire%'
  `,
  chests: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%BP_PL_Chest%'
    or ap.class like '%bp_Strongbox%'
  `,
  crabPots: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%BP_PL_Crafting_CrabPot%'
  `,
  crafting: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%BP_PL_Crafting%'
  `,
  fishNets: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%BP_PL_Crafting_FishNet%'
  `,
  mapRooms: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%BP_PL_Maproom%'
  `,
  pets: `
    select ap.x, ap.y, ap.z, petname.value as name, petinfo.value as info, petowner.value as owner
    from actor_position as ap
    left outer join properties as petname on petname.object_id = ap.id and petname.name like '%petname'
    left outer join properties as petinfo on petinfo.object_id = ap.id and petinfo.name like '%thrallinfo'
    left outer join properties as petowner on petowner.object_id = ap.id and petowner.name like '%owner%'
    where ap.class like '%wildlife%pet%'
    or ap.class like '%pict_wildlife%'
    or ap.class like '%npc_wildlife%'
  `,
  horses: `
    select ap.x, ap.y, ap.z, petname.value as name, petinfo.value as info, petowner.value as owner
    from actor_position as ap
    left outer join properties as petname on petname.object_id = ap.id and petname.name like '%petname'
    left outer join properties as petinfo on petinfo.object_id = ap.id and petinfo.name like '%thrallinfo'
    left outer join properties as petowner on petowner.object_id = ap.id and petowner.name like '%owner%'
    where ap.class like '%mounts_horse%'
  `,
  thralls: `
    select ap.x, ap.y, ap.z, petname.value as name, petinfo.value as info, petowner.value as owner
    from actor_position as ap
    left outer join properties as petname on petname.object_id = ap.id and petname.name like '%thrallname'
    left outer join properties as petinfo on petinfo.object_id = ap.id and petinfo.name like '%thrallinfo'
    left outer join properties as petowner on petowner.object_id = ap.id and petowner.name like '%owner%'
    where ap.class like '%PersistentHumanoidNPC%'
    or ap.class like '%EntertainerHumanoidNPC%' 
  `,
  thrallsinchest: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, i.template_id, i.data, i.owner_id as item_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    left outer join item_inventory as i on i.owner_id = b.object_id
    where i.template_id = 0
    or i.template_id in ( 19617, 19618, 19088, 5360, 5361)
    or i.template_id in ( 92223, 92226, 92229, 92232, 2711, 2714)
    or i.template_id between '19085' and '19088'
    or i.template_id between '19094' and '19150'
    or i.template_id between '6350' and '6363'
    or i.template_id between '3350' and '3362'
  `,
  pippiThespians: `
    select ap.class, ap.x, ap.y, ap.z, pippi.value as buffer
    from actor_position as ap
    left outer join properties as pippi on pippi.object_id = ap.id and pippi.name like '%mobconfig'
    where ap.class like '%pippi_mob%'
  `,
  pippiAll: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%Pippi%'
  `,
  players: `
    select quote(g.name) as guild_name, quote(g.guildid) as guild_id, quote(c.char_name) as char_name,
    case c.rank WHEN '3' then 'Guild master' WHEN '2' then 'Officer' WHEN '1' then 'Member' WHEN '0' then 'Recruit' ELSE c.rank END rank,
    c.level as level, c.playerid as steam_id, quote(c.id) as char_id, ap.x as x, ap.y as y, ap.z as z,
    acc.online as online,
    datetime(c.lastTimeOnline, 'unixepoch') as last_online from characters as c
    left outer join guilds as g on g.guildid = c.guild
    left outer join actor_position as ap on ap.id = c.id
    left outer join account as acc on acc.id = c.playerId
    order by last_online desc
  `,
  thrones: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%BP_PL_Chair_Throne%'
  `,
  trebuchets: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%Trebuchet_V2%'
  `,
  vaults: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%BP_PL_Chest_Vault%'
  `,
  waterWells: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%Water_Well%'
    or ap.class like '%BP_Fountain%'
  `,
  wheelsOfPain: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%wheelofpain%'
    or ap.class like '%CraftingStation_Crucifix2%'
  `,
  penguins: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%SvS_BP_Penguin%'
  `,
  tavernbags: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%SvS_BP_Tavern_Bag%'
  `,
  svsfx: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%SvS_BP_Fire_0%'
    or ap.class like '%SvS_BP_Slimeweb%'
    or ap.class like '%SvS_BP_Dust%'
  `,
  waterfalls: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%Waterfall%'
  `,
  relicsinchest: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, i.template_id, i.data, i.owner_id as item_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    left outer join item_inventory as i on i.owner_id = b.object_id
    where i.template_id between '6765921' and '6765939'
  `,
}
