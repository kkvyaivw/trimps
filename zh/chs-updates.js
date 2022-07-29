/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],
    //#region 标题标点等
    'Trimps Updates!': '脆皮更新日志！',
    '!': '！',
    //#endregion 
    //#region 更新大类
    'Balance': '平衡性调整',
    'Bone Trader Changes': '骨法商人变更',
    'Bug Fix': '错误修复',
    'Bug Fixes': '错误修复',
    'Bug Fixes (U1 and U2)': '错误修复(宇宙1及宇宙2)',
    'Content': '游戏内容',
    'Content Change': '游戏内容变更',
    'Content Changes': '游戏内容变更',
    'Content (Universe 2)': '游戏内容(宇宙2)',
    'Content (Universe 2 spoilers!)': '游戏内容(含宇宙2剧透！)',
    'Content/Balance': '游戏内容/平衡性调整',
    'Find Trimps on': '与脆皮相关的平台',
    'Map at Zone Improvements': '自动进图改善',
    'Misc': '杂项',
    'Other': '其他',
    'Other UI/QOL Changes': '其他游戏界面/游戏体验变更',
    'QOL': '游戏体验',
    'Screen Reader': '屏幕阅读版',
    'Screen Reader Version': '屏幕阅读版',
    'Spire Assault': '尖塔突击',
    'UI/QOL': '游戏界面/游戏体验',
    'UI/Quality Of Life': '游戏界面/游戏体验',
    'UI/Quality of Life': '游戏界面/游戏体验',
    'UI / Quality of Life Stuff': '游戏界面/游戏体验等',
    'Universe 1': '宇宙1',
    'Universe 2': '宇宙2',
    'Universe 2 UI/QOL': '宇宙2游戏界面/游戏体验',
    //#endregion
    //#region 5.7.1
    'Made some changes to ADVISOR\'s text to clear up some confusion around where to find the Z15 Unique Map': '调整了舰载智能机器人的部分文本，以避免在发现区域15独特地图的方法上产生歧义。',
    'Added a line to the Heirloom help text, stating that you can purchase carry slots but the Nu will be permanently consumed.': '在传家宝帮助的文本中加入一行，以体现您可以增加携带栏容量，但将永久消耗虚空物质。',
    'Added text on T2+ equipment explaining how to find and customize the Highlight setting. When Highlight Equipment is on its default setting, added text to T2+ equipment stating that only the highest tier is being calculated.': '在阶级2及以上的装备上增加了发现和自定义高亮显示装备的说明。当高亮显示装备为默认设置时，在阶级2及以上的装备上增加了相应说明，只高亮显示最大阶级的装备。',
    'Added an entry to the Keybinds listing for AD(V)ISOR.': '增加了舰载智能机器人的快捷键说明。',
    'Fixed a text error on the Steam Cloud Save confirmation prompt where Zone number for each save was sometimes not properly displaying.': '修复了Steam云存档确认框中存档区域显示不正确的问题。',
    //#endregion
    //#region 5.7.0
    'Added a Tutorial that triggers after researching your first point of Science on a fresh save. This tutorial gives some tips to new players who might not be familiar with the genre, hopefully allowing them to complete their first Portal without feeling like they need to Google anything. The tutorial is narrated by ADVISOR, your ship\'s Automated Defensive Voice and Idea Synthesizing On-board Robot.': '在一个存档中第一次进行研究后将出现教程。希望这能帮助新玩家更好地了解游戏机制。教程将由飞船的舰载智能机器人来讲授。',
    'Time Warp now accelerates the Skeletimp timer, so it\'s possible to find multiple Skeletimps per Time Warp. You should now be earning the same amount of Bones from Time Warp when not playing as you would if you left the game running.': '进行时间跃迁时，脆皮骷髅的出现时间也会变化，因此您可以在时间跃迁中遇到多个脆皮骷髅了。这样，不管是在线还是离线，您的骨头收益都不会有太大区别了。',
    'Deca Build has been removed as a Mastery and added instead as a 305 BW reward. In its place is \'Kerfluffle\', which grants +10% attack when Fluffy is active, and another 10% compounding attack every time Fluffy evolves. If you had Deca Build purchased before loading 5.7.0, you\'ll automatically have Kerfluffle purchased instead. If you had completed a Z305 BW before 5.7.0, you\'ll automatically have Deca Build.': '移除了十重建造专精，现在它的效果将在通过区域305的仿生仙境地图时生效。取代它出现的是“绒绒缭乱”专精。它将在绒绒出现后使我方脆皮的攻击力增加10%，且绒绒每进化一次，使我方脆皮的攻击力再增加10%，效果相互叠乘。如果您在5.7.0版本之前就购买了十重建造专精，那么您将自动获得绒绒缭乱专精。如果您在5.7.0版本之前就通过了区域305的仿生仙境地图，那么您将自动获得十重建造的效果。',
    'Universe 2 - Added a new unique bonus for Scruffy Level 20, and 2 new blank damage levels for Levels 21 and 22': '宇宙2污污增加了等级20的技能，并增加了等级21和22的攻击力加成。',
    'For the first time in nearly 7 years, the Bone Trader has received some major changes!': '七年过去了，骨法商人终于迎来了大更新！',
    '12/36 hour resource Boosts have been removed. Well, reworked at least. The whole left section has been replaced by a brand new "Permanent Upgrades" section. Each upgrade starts at 10 Bones with the cost increasing by +10 Bones per purchase, and each can be purchased a maximum of 10 times. This is a total cost of 2,200 Bones to max all upgrades.': '12/36小时的资源加成部分已经移除。取而代之的是崭新的“永久生效的升级”。每一种升级初始花费10骨头，每次购买后花费增加10骨头，最高可以购买10次。购买所有升级需要花费2200骨头。',
    'The first new Permanent Bone Upgrade grants a 1% chance to duplicate a Void Map per level, or 10% more Void Maps at 10 levels, guaranteed. If you have 5 levels of Bone Void Maps then every 20th Void Map will be duplicated, if you have 10 levels every 10th Void Map will be duplicated. No RNG!': '第一个永久生效的升级，每级升级可以使复制虚空地图充能1%。如果您升级了5级，则每20张虚空地图就将复制1张虚空地图，升级10级后，每10张虚空地图就将复制1张虚空地图。',
    'The second Upgrade is in the spirit of the old Boosts, adding a new mechanic called the Bone Shrine. At 1 level of Bone Shrine, you will unlock a new button by Food at the top left of the screen, and will start accumulating 1 Bone Charge every 4 hours, stacking to a max of 10 Bone Charges. You can click this new button to consume a Bone Charge whenever you want, which at level 1 will grant 10 minutes of your current gathering rates for Food, Wood, and Metal ': '第二个永久生效的升级继承了资源加成的意志，新增了一个称为骨头神龛的机制。只要升级它，您就可以在食物的左上角看到一个新按钮，每4个小时可以获得1层骨头充能，最高10层。您可以点击该按钮消耗1层骨头充能，并',
    'as Loot': '以战利品',
    ', meaning it gets gathering and looting bonuses. Any storages required to hold your spoils will be constructed automatically, and their costs deducted from the pot. Each level of this upgrade increases the base resources granted by +10 minutes of gathering time. Levels 5 and 10 reduce the Bone Charge generation cooldown by 30 minutes each. At level 10, grants 1 charge every 3 hours that grant 100 minutes of gathering per use. Bone Charges persist through Portal, allowing you to save them up for when you need them and pop them all at once! Check the handy dandy tooltip on the Bone Charges button to see a preview of what you\'ll get and how many storages will be constructed.': '获得相当于10分钟产量的食物、木头和金属，换句话说它可以同时享受到资源获取速度和战利品的加成。它同时也会自动建造存储建筑，并扣除相应花费。每级升级可以使获取的资源时长增加10分钟，且5级和10级时还可以使骨头充能的时间减少30分钟。升级10级后，每3个小时可以获得1层骨头充能，消耗1层骨头充能可以获得相当于100分钟的产量。骨头充能在传送后仍然存在，您可以在想要使用的时候才进行使用！将鼠标停留在该按钮上可以查看骨头充能的收益和存储建筑的建造情况。',
    'Upgrade 3 increases the chance for Exotic Imports to spawn in your world by +0.05% per level. At 10 levels, not counting any other bonuses, Exotic Imports will have a 3.5% chance to spawn per cell.': '第三个永久生效的升级，每级升级可以使奇异外皮的出现率增加0.05%。升级10级后，在不将其他加成纳入计算时，奇异外皮的出现率将变为3.5%。',
    'Upgrade 4, "Multitasking", allows 5% per level of your employed Trimps to breed while working, and allows 5% of your unemployed Trimps to assist with Gathering while your town is full and they\'re not breeding. The 5% Trimps per level that can breed while working are actually shown as extra breeding Trimps - if you have 10 levels and 1000 max Trimps, you can have 500 employed and will see 750 breeding. The 5% unemployed Trimps that assist with gathering when not breeding is displayed as a 5% increase to all trimp-employable resource gathering (not gems).': '第四个永久生效的升级名为“一身二用”，每级升级可以使5%工作的脆皮同时进行繁殖，5%未雇佣的脆皮在脆皮达到上限且未进行繁殖时帮忙获取资源。额外进行繁殖的脆皮将在面板上显示，如果您升级了10级，且脆皮上限为1000，那么面板上将显示有500个脆皮未雇佣，750个脆皮在繁殖中。额外帮忙获取资源的脆皮将直接体现在资源产量明细中。',
    'Permanent Boosts are locked until all Exotic Imports are purchased.': '永久生效的升级在购买所有奇异外皮后解锁。',
    'Changed descriptions of Exotic Imports to actually describe what they do. Technology sure is amazing these days': '调整了所有奇异外皮的效果描述。世界变化太快啦。',
    'Map at Zone no longer checks your presets for conflicts where two would try to run at the same cell. Instead, MaZ now completes each preset in order at the selected cell!': '自动进图的预设不再因格子相同而冲突。它们将按顺序依次启用！',
    'Added a new box for \'Priority\'. If two presets want to run maps at the same cell, the one with the lowest number for Priority will run first. When saving your MaZ presets, these will be resorted on the UI based on their Priority.': '增加了“优先级”的新选项。两个预设同时启用时，优先级数值最低的预设将先启用。保存自动进图的预设时，将按照优先级对它们进行排序。',
    'Added a new option to Zone Repeat for \'Repeat Every X Zones\'. Selecting this option will cause a new input box to magically appear in the form, allowing you to set a custom amount of Zones for how often that preset should repeat.': '区域重复增加了“每X个区域”的选项。您可以自行设定运行地图的频率。',
    'Renamed the \'Confirm\' button to \'Save and Close\', and added a new button to the right of \'Cancel\' that\'s simply \'Save\'. \'Save\' will save your settings, sort your presets, and keep the window open.': '将“确认”按钮重命名为了“保存并关闭”按钮，并在“取消”按钮右侧新增了一个“保存”按钮。点击“保存”按钮后将保存预设，但不会退出自动进图界面。',
    'Repeat X Times and Exit BW after L no longer silently change the number to 10/125 if an invalid number is entered, and instead give an error message': '重复X次和仿生目标在输入值不合法时，不再直接将数值设为10/125，而是会弹出错误提示。',
    'Repeat X Times now works on BWs if not looking to climb': '在不是冲层的前提下，重复X次可以对仿生仙境生效了。',
    'Added more detailed preset names to Map at Zone': '自动进图预设的名称更加详细。',
    'When adding a new line to Map at Zone, the \'Run Map\' checkbox is now checked by default.': '增加预设时，将默认勾选“是否进图”。',
    'Added a Help button to Map at Zone with an explanation of all settings': '增加了一个说明各项设置功能的帮助按钮。',
    'Updated the sizings of columns on the MaZ UI to better fit the contents of all dropdowns and make it look less hectic when extra input boxes are added for things like Climb BW or Repeat every X Zones': '调整了UI，使部分选项的显示效果更好。',
    'Added a button to the Heirlooms Window to see drop chances (or press C with the Heirloom window open). This opens up with chances at your current zone, and includes arrows to see other breakpoints you\'ve unlocked. Works with keyboard arrow keys as well!': '在传家宝界面中增加了一个按钮，可以用来查看传家宝掉率(也可以在传家宝界面中按C键打开)。您可以在此看到已通过所有区域的传家宝掉率。',
    'You can now press K or click the button under settings to open up a list of all Hot(K)eys': '您可以按K键，或者在设置界面下点击相应按钮来查看快捷键列表。',
    'Added hotkey for Heirloom window (L)': '增加了传家宝界面的快捷键(L)。',
    'Added a line of text to the bottom of all Equipment, showing the cost in resources per stat point earned from this item. This should be useful for deciding which Equipment to purchase next - the lower the number the more efficient the purchase.': '在所有装备按钮的底部增加了一行文本，它可以显示相应装备的性价比。',
    'Added a new setting to highlight the most efficient equipment based on metal spent per stat point gained. Highlights top attack and health item. Default is to only show most efficient equipment at your highest available tier, but this can be toggled to show all equipment, or disabled entirely.': '增加了一个新设置，它可以高亮显示性价比最高的武器和护甲。默认只高亮显示阶级最大的装备，但您也可以将它切换到显示所有装备，或者是关闭该选项。',
    'Challenges no longer move 1px away from the selected challenge': '选择挑战时不再使它移动1px了。',
    'The Heirlooms button now unlocks after finding your first Heirloom rather than immediately after your fifth Portal': '传家宝界面从第五次传送后解锁变为获得第一个传家宝后解锁。',
    'Made some UI improvements/fixes for windows < 1000px width': '调整了部分UI，以适配小于1000px宽度的屏幕。',
    'Pressing escape while no windows are open will toggle the Settings menu': '没有打开任何界面时，按ESC键将切换是否显示设置界面。',
    'Opening Achievements, Stats, Heirlooms and Bone Trader now closes all tooltips': '开启成就、统计、传家宝和骨法商人界面时将关闭所有提示框。',
    'Attempting to fire any jobs other than Farmer, Lumberjack, Miner, Scientist, or Geneticist now opens a confirmation popup': '解雇农民、伐木工、矿工、科学家或遗传学家以外的脆皮时，将弹出确认框。',
    'Void Map and Stacked Void Map counts are now always displayed on the Zone info tooltip (not just when in a Void Map)': '虚空地图数量及融合数量将常时在世界信息的提示框中显示(而非之前只在虚空地图中显示)。',
    'Fixed an issue that was causing Alchemy to appear in the message configuration before it was unlocked.': '修复了炼金术在消息设置中提前出现的问题。',
    'Trimple of Doom is now properly green the very first time you find it when it will reward a Perk.': '首次发现末日神殿地图，它可以给予特权时，将以绿色背景显示。',
    'Fixed a message on the Metal challenge that referenced Scientists if you didn\'t have any hired': '修复了金属挑战中在未雇佣科学家时错误提到科学家的问题。',
    'Fixed an issue where some of the AutoSomething buttons on the main page didn\'t have uniform border appearance on hover': '修复了主界面部分自动按钮在鼠标停留时边框不统一的问题。',
    'Fixed an issue where the Obsidian tooltip failed to open in some situations': '修复了部分情况下黑曜石提示框不弹出的问题。',
    'Resetting your save now properly hides the SA tab': '删除存档后将正确地隐藏尖塔突击界面。',
    'Prettified the Plaguebringer modifier description in the Heirloom window': '调整了传家宝界面瘟疫使者效果描述的显示样式。',
    'Fixed an issue with Time Warp where formations weren\'t showing up until the second formation was unlocked.': '修复了时间跃迁中在解锁第二个阵型后才出现阵型按钮的问题。',
    'Fixed an issue that could grant double Trimps from unlocking Hubs while in Time Warp.': '修复了时间跃迁中在解锁中心枢纽时可能使它容纳脆皮翻倍的问题。',
    'Fixed a bug where the Maps button was grey when reaching Z6 after starting on a fresh browser without refreshing the window': '修复了在新打开浏览器并到达区域6时地图按钮为灰色的错误。',
    'Fixed a display bug when running Duel': '修复了运行决斗',
    ' where the stack tooltip would say Trimps are fast when they\'re not.': '挑战时错误显示脆皮抢先攻击的问题。',
    'Heirloom Gamma Burst description now properly shows 4 stacks to trigger after Burstier is purchased': '获得速速爆发升级后，传家宝界面的伽马爆发描述会正确显示需要4层蓄能才能释放能量。',
    'Removed the S from Fragments in map price if the map only costs 1 Fragment': '如果地图只需要1碎片，则去掉碎片英文末尾的s(中文无影响)。',
    'All jobs, buildings, upgrades, and equipment are now redrawn when Time Warp ends. This should fix a few rare bugs such as unpurchaseable golden upgrade spam after Time Warp ends.': '所有工作、建筑、升级和装备在时间跃迁结束后会刷新一次。这可以避免出现一些罕见的错误，例如无法购买的金色升级。',
    'Fixed a bug where using Map at Zone\'s \'Repeat X Times\' wasn\'t showing up on the button until after the first map was completed': '修复了自动进图时，只在通过1次地图后，才在按钮上显示重复X次的错误。',
    'Fixed a bug that could cause the extra map side buttons to be blank on a fresh save that hadn\'t refreshed': '修复了新存档的额外地图按钮为空白的错误。',
    //#endregion
    //#region 5.6.5
    'The Experience Challenge no longer requires that you end the Challenge on a BW in order to get the extra bonus. If you complete Experience by completing Z700, you\'ll now get credit for the highest BW cleared on that run. Adjusted descriptions/tooltips for new behavior. NOTE: You need to clear a BW on this patch for it to count. If you\'re mid-Experience and above Z600 when updating to 5.6.5, you\'ll still need to finish that one last run via BW completion.': '经历挑战不再需要通过仿生仙境地图来获得额外加成。如果您通过区域700完成经历挑战，那么将根据本周目最高通过的仿生仙境地图来获得加成。相应描述文字也进行了调整。注意：如果您在本次更新前正在进行经历挑战，则仍然需要至少通过一张仿生仙境地图才能获得加成。',
    'Holey (U1 ': '多洞(宇宙1',
    'hidden': '隐藏',
    ' feat) now unhides at Z75. This feat was added back when it was more realistic to actually spend this much on Wormholes and is no longer meeting the goal of hidden feats being things that will usually just happen eventually.': '壮举)在区域75才出现。到达该区域后您差不多可以获得足够数量的氦来消耗到虫洞上，此时再隐藏这个壮举就没有意义了。',
    'Added an Equality UI to Time Warp where applicable': '在时间跃迁界面中添加了平等界面。',
    'Added a stat for highest BW clear': '增加了仿生仙境地图最高通过区域的统计。',
    'Fixed a crash that could occur when MaZ tried to run Melting Point while there was another map in progress.': '修复了自动进图在运行一张地图时又尝试运行熔点地图导致的游戏崩溃问题。',
    //#endregion
    //#region 5.6.4
    'SA Presets saved after 5.6.4 will store your current Enemy Level and Ring Mods as well. Added options for enabling/disabling the loading of Enemy Level and Ring Mods when loading a preset. These options don\'t need to be on when saving a preset, just for loading.': '从5.6.4版本开始，尖塔突击保存的预设也会保存敌人等级和灵戒词缀。增加了读取预设时是否设置敌人等级和载入灵戒词缀的选项。这些选项只需要在读取预设时设置。',
    'Moved around some things in the SA settings screen to fit some extra information and to make sure the save/load/rename buttons are always at the top if item lists get really long later on.': '调整了尖塔突击设置的界面以适应新增的选项，并保证即使在物品列表极长的情况下，保存、读取和重命名按钮也始终位于顶部。',
    'Time Warp\'s Formations UI now properly updates as you unlock new Formations in game.': '时间跃迁的阵型界面可以在解锁新阵型后正确刷新。',
    //#endregion
    //#region 5.6.3
    'Bag of Nails now stops Slowing Aura on the same turn that you apply a bleed': '锐钉之袋可以在触发流血的同一回合使怒怒的减速气场无效了。',
    'Frozen Castle Heirlooms now have their own seed': '冻结城堡掉落的传家宝拥有了自己的随机数种子。',
    'Equipping a hidden SA item now unhides it': '装备隐藏的尖塔突击物品时将使它取消隐藏。',
    'Fixed an issue where the SA UI would be unresponsive when killing enemies really quickly': '修复了过快击杀敌人时尖塔突击界面无响应的问题。',
    'Tightened up the Heirloom UI so the two most recent tiers fit better on the screen': '调整了传家宝界面，以使最后两种传家宝的显示效果变得更好。',
    //#endregion
    //#region 5.6.2
    'SA Ring upgrades purchased after this patch can now be undone': '可以回滚本次更新后进行的灵戒升级了。',
    'Frozen Castle is now green on the map selection screen': '在地图库房中，冻结城堡变为绿色背景。',
    'Frozen Castle now has the visual snow effect': '冻结城堡拥有了下雪的视觉效果。',
    'You can now change Perks on the Portal screen without needing to abandon Hypothermia first': '您不需要放弃失温挑战，也可以在传送门界面中调整特权了。',
    'The Equality tab now has a visual indicator for when scaling is on or off': '平等面板可以直接显示目前是否启用缩放了。',
    'Equality stacks now also show when scaling is disabled': '禁用缩放时也可以显示平等生效等级了。',
    'When using a screen with less than 1000px width, the Equality popup uses a larger percentage of your screen\'s width': '当屏幕宽度低于1000px时，平等窗口的显示大小增加。',
    'Vertically centered tooltips no longer consider the settings bar to be valid screen space, and try to avoid overlapping it': '垂直居中的提示框不再把底部设置纳入居中范围内，并会尝试覆盖底部设置。',
    'Scruffy\'s L18 bonus no longer considers it a run if you Portal below Z25 with no completed Void Maps': '如果您在低于区域25的区域传送了，且没有运行过虚空地图，则不纳入污污等级18的技能加成计算中。',
    'Glass stacks can no longer fall below 0': '玻璃层数无法低于0了。',
    'Fixed an issue where Omni-Enhancer wasn\'t providing Poison Stack Rate': '修复了全领域强化器不增加中毒层数叠加数的问题。',
    'Fixed an issue where Wrath Crafted Hatchet wasn\'t providing Attack Speed': '修复了狂怒手斧不减少攻击间隔的问题。',
    //#endregion
    //#region 5.6.1
    'Shards are now properly refunded when canceling a contract': '放弃合约时可以正确返还晶块了。',
    'Fixed a display bug where Experience would show an infinity symbol instead of "0%" from Bionic Wonderlands if the Challenge was completed via Z700 instead of BWs.': '修复了通过区域700完成经历挑战时，仿生仙境的经验值加成显示无穷大，而不是0%的问题。',
    'The Run Map button for Frozen Castle now properly disappears after the map does': '冻结城堡的运行地图按钮可以正常地消失了。',
    'Reworded the Hypothermia Ember tooltip for clarity': '调整了失温挑战的余烬提示框文字。',
    'Reworded the end of the Experience description involving completion via BW vs Z700': '调整了经历挑战通过仿生仙境地图和区域700完成挑战时的相应文字。',
    'Fixed some cut-off text on Doppelganger Signet\'s Contract description': '修复了分身纹章的合约描述中部分截断文本的问题。',
    //#endregion
    //#region 5.6.0
    'Added a new Challenge at Z600, "Experience". This is a repeatable Challenge that grants extra Fluffy Exp instead of Helium.': '增加了一个区域600解锁的挑战“经历”。它是一个可重复挑战，可以额外获得绒绒经验值。',
    'Added a new Heirloom tier that can begin dropping at Z200, and two brand new mods that can roll at the new tier.': '传家宝增加了新的稀有度，它在区域200开始掉落，并且可以出现两个新词缀。',
    'Added a new repeatable Radon Challenge at U2 Z175 that also unlocks a new Perk on first completion': '增加了一个区域175解锁的可重复挑战，首次完成后还可以解锁一个特权。',
    'Added another new Challenge with a unique reward. This Challenge is also available as a Challenge': '增加了另一个拥有独特奖励的挑战。它同时也出现在挑战',
    'Added a new Unique Map at U2 Z175': '增加了一张在区域175出现的新独特地图。',
    'Added a new crit tier': '增加了新的暴击阶级。',
    'Added Scruffy bonuses to Levels 17, 18, and 19.': '污污增加了等级17，18，19的技能。',
    'Added a new Achievement tier and 6 new Achievements': '增加了新的成就阶级和6个成就。',
    'Observation now has 1 level included as part of the base perk when it is unlocked. This grants everyone +1000 trinket storage and 1 perk level worth of increased drop chance and mult. The guaranteed drop every 25 zones for every 2 levels of the perk is unchanged and still increases at 2/4/6 etc.': '解锁洞察特权后直接获得1级特权的效果。它可以使小符饰上限增加1000，相应的加成也正常计算。稳定获得的小符饰不受影响。',
    'Added a bunch of new affixes that can spawn starting at Enemy Level 51. Some of these new affixes are considered "Specials" and are mutually exclusive.': '增加了大量新词缀，从敌人等级51以后出现。部分能力词缀为“特殊”词缀，彼此互斥。',
    'Enemies killed at and above level 51 after this patch now drop Shards in addition to Dust, at a rate of 1 shard per 1 billion Dust earned at 51+.': '击杀敌人等级51及以上的敌人后除了获得魔尘以外还可以获得晶块，每获得十亿(1e9)魔尘就可以获得1晶块。',
    'Shards can be used to purchase Contracts for and Upgrade new items from this patch, or to upgrade a powerful new customizable bonus item called The Ring.': '你可以使用晶块来接受新合约，升级新物品，或者是升级新的自定义奖励物品，灵戒。',
    'Above enemy level 50, you are now much less likely to run into the same resistance on back to back levels, and much less likely to get two different resists on the same level.': '对于超过敌人等级50的敌人来说，相邻等级的敌人拥有相同种类抗性的概率大幅度下降，同一等级敌人拥有两种抗性的概率大幅度下降。',
    'You no longer get the warning that you need an item that can cause a shock when using Nozzled Goggles.': '装备护目镜时不再提示需要可以使敌人震荡的物品。',
    'Enemy Slow Aura is now always applied before Huffy\'s excess Attack Speed -> Slow Aura conversion, making sure Huffy can reach 0.5 Attack Time on levels with Slow Aura.': '从现在起，将先计算敌人的减速气场，然后再计算怒怒的攻击间隔是否低于下限，是否转化为减速气场。这可以保证怒怒在敌人拥有减速气场时还可以达到0.5的攻击间隔。',
    'Added 7 new items that cost Shards': '增加了7个需要花费晶块的新物品。',
    'Added 1 new item that costs Dust.': '增加了1个需要花费魔尘的新物品。',
    'Added stats for highest level and Shards': '增加了最高等级和晶块的统计。',
    'Added a Formations UI to Time Warp': '在时间跃迁界面中增加了阵型界面。',
    'AutoEquip, AutoUpgrade, AutoPrestige, and AutoStructure purchases will now be checked automatically before resources shred on Pandemonium': '在群魔乱舞的效果减少资源之前，会先判断能否触发自动装备、自动升级、自动重铸和自动建造。',
    'When in the Map Chamber, the Hotkey "C" will now Continue/Run Map': '在地图库房时，可以使用快捷键：C来继续或运行地图。',
    'Prettified the Nu cost of adding a Carry slot in the Heirlooms window': '在传家宝界面中，升级携带栏容量的虚空物质花费数值也使用设置中的相应记数法。',
    'When Portaling with Heirlooms that will be recycled, the confirmation popup now tells you the highest rarity of Heirloom in your inventory': '传送时，如果有可以回收的传家宝，将提示您临时栏中传家宝最高的稀有度。',
    'When finding Dark Essence, the message in the log now tells you how many drops remain on the current Zone': '获得黑暗精华时，消息会提示您当前区域中还可以掉落几次黑暗精华。',
    'After finishing your final Scientist Challenge, you can now click the Portal Title (Time Portal Mk. VI) to change the background color to one of the earlier ones.': '完成最后一次科学家挑战后，您可以点击传送门标题(时空传送门·改 VI)来切换时空传送门背景颜色。',
    'Heirloom upgrades can now be purchased 100x at a time': '传家宝升级可以一次性购买100次升级了。',
    'Darkened the orange tooltip price text that indicates insufficient storage space': '调暗了提示存储上限不足的橙色提示框文字颜色。',
    'Observation\'s tooltip now updates mult and drop chance on the Portal screen while allocating perk levels without having to confirm': '传送门界面中，洞察特权的相应加成变化可以在分配后直接查看，无需确认分配。',
    'Adjusted the U2 style to move the Prismatic Shield display a bit more to the right so "Crit!"s aren\'t overlapped with high PS values': '调整了棱镜护盾的显示位置，以免暴击文字覆盖棱镜护盾的相应内容。',
    'The MaZ error message for Start Zone being too low or too high now properly says Start Zone instead of Exit at Zone': '自动进图对于起点区域太低或太高报错的消息提示文字不再显示“退出区域”，改为显示“起点区域”。',
    'Fixed an issue where the max for MaZ End Zone was 1 lower than Start Zone': '修复了自动进图的终点区域最大值比起点区域低1级时导致的问题。',
    'The Liquification III tooltip in U2 now shows the proper HSII zone': '宇宙2的液化 III专精提示框中，区域的相关数值可以正确显示了。',
    'Fixed an issue where replacing a mod on a Spire Core could sometimes think you don\'t have enough Spirestones when you do': '修复了替换尖塔核心词缀时，可能错误认为尖塔石不足的问题。',
    'Fixed a display issue where leftover Radon sometimes showed an incorrect value on the View Perks screen until a perk was bought': '修复了查看特权界面中剩余氡的数值有时不准确的问题。',
    'The game now clears your Ctrl/Shift key state when you unfocus the game': '当游戏未处于前台时，将自动弹起Ctrl和Shift按键。',
    //#endregion
    //#region 5.5.1
    'Added "i" as a hotkey to open Spire Assault, and added a Help/FAQ entry for it.': '您可以使用快捷键：i打开尖塔突击了，在尖塔突击帮助/提示中增加了相应描述。',
    'Added a Help/FAQ SA entry explaining how to progress the Kill counter': '在尖塔突击帮助/提示中增加了关于击杀计数的描述。',
    'Added a Help/FAQ SA entry explaining how to reset the Session Score': '在尖塔突击帮助/提示中增加了关于击杀计数重置的描述。',
    'Fixed an issue where the AutoJob balancing on Miner/Scientist unlock wasn\'t respecting the set max for that job': '修复了自动工作在解锁矿工或科学家自动分配工作时忽略工作上限的问题。',
    'Fixed an issue where the SA item description bar would disappear when renaming a preset': '修复了为尖塔突击预设重命名导致物品描述消失的问题。',
    'Removed the hover effect/pointer when mousing over the health bars in SA': '将鼠标停留在尖塔突击的生命条上时不再显示悬停效果或指针。',
    'Reworded the description of Huffstle to clarify that you need a score of 100-0 rather than 100 wins in a row': '调整了怒怒之城成就的描述，更准确表达完成条件。',
    'Fixed an issue where the Scientist Challenge was starting with the incorrect amount of Science': '修复了科学家挑战的起始科学点不正确的问题。',
    'Fixed an issue that existed prior to 5.5.0 where U2 Perk import strings were checking against U1 perks when deciding if a respec needed to be used': '修复了5.5.0之前就存在的问题，宇宙2导入特权时检查是否需要洗点错误地基于宇宙1特权进行。',
    //#endregion
    //#region 5.5.0
    'Holidays are now automated! The Pumpkimp Event now automatically turns on from Oct 1 through Nov 5, the Presimpt Event runs from Dec 15 through Jan 15, and the Eggs Event runs for all of April': '从现在起，活动将自动开始和结束！脆皮南瓜怪活动从10月1日开始，到11月5日结束；脆皮小礼活动从12月15日开始，到1月15日结束；万圣节彩蛋活动持续整个4月。',
    'The Curious Perk now grants +80 base Fluffy XP per level, up from +60': '好奇特权的绒绒基础经验奖励从+60变为+80。',
    'Towers in the Personal Spire are now capped to 10 each. Once you have 10 of each Tower, you\'ll gain the option to "Seal" your Spire for an extra bonus.': '从现在起，您的尖塔中每种小塔最多可以建造10个。当每种小塔都到达10个以后，您将可以“关闭尖塔”以获得额外加成。',
    'Added 2 new Frost Trap upgrades and 2 new Poison Trap upgrades to the Player Spire': '冰霜陷阱和剧毒陷阱增加了两次升级。',
    'Bionic Wonderlands can no longer be created more than 100 Zones past your Obsidian level': '仿生仙境地图等级无法超过黑曜石区域加上100层。',
    'The Daily Challenge Reflect modifier no longer reflects Overkill damage, and the damage dealt in U2 no longer skips your Shield.': '日常挑战的[反馈]词缀不再反馈溢出伤害，宇宙2中造成的伤害不再无视棱镜护盾。',
    ' bonus is now capped at 60K%': '加成无法超过60K%(6e4%)。',
    'Added a new minigame-style feature to Universe 2, unlocked at Z75.': '宇宙2增加了一个新机制，在区域75解锁。',
    'Added a new repeatable Radon Challenge at Z155': '增加了一个区域155解锁的可重复挑战。',
    'Added a new Mayhem-like challenge at Z150': '增加了一个区域150解锁的挑战，机制与暴乱类似。',
    'The Mayhem Challenge completion bonus now also applies to Helium in U1': '暴乱挑战的加成对宇宙1的氦也生效。',
    'Added 15 new Achievements': '新增了15个成就。',
    'Achievement percentage above 50k now grants 1 GU every 10k%': '成就的伤害加成超过50K%(5e4%，50000%)以后，每有10K%(1e4%，10000%)伤害加成，每周目初始就获得一个金色升级。',
    'Added a bonus to Scruffy L16': '污污增加了等级16的技能。',
    'Changed some story messages between Z60-100, and added new story messages through Z160': '调整了区域60至区域100的部分故事消息，故事消息新增至区域160。',
    'The Archaeology Challenge has moved from Z95 to Z90': '考古学挑战从区域95解锁变为区域90解锁。',
    'The second time you complete Archaeology will now unlock a string based Custom AutoGold option': '第二次完成考古学挑战后可以解锁自定义自动金色升级。',
    'Added the ability to run Melting Point from Map at Zone, and added 1 new Map Preset for U2 to put it in.': '您可以在自动进图中自动运行熔点地图了。',
    'The U2 Explode Daily Mod now hits your Shield': '宇宙2日常挑战中被击杀时造成伤害的词缀不再无视棱镜护盾。',
    'Equality Reversing now has its own slider, and now works based on current attack count against the enemy rather than waiting for something to die. This potentially allows multiple stacks of Equality to be reversed on the same enemy.': '平等消除追加滑块，效果从基于阵亡次数改为基于攻击次数。改动后可以对同一个敌人触发多次平等消除。',
    'Scruffy L14 now grants 1300% damage, up from 1225%': '污污等级14的攻击力加成从1225%变为1300%。',
    'The Bublé Challenge now grants +500% Rn (up from +300%) on completion, and +200% Rn (up from +100%) on fail.': '泡影挑战完成时的氡额外获取量从+300%变为+500%，失败时的氡额外获取量从+100%变为+200%。',
    'The Exterminate Achievement now requires that you reach 100 Swarm Stacks by Z120, then complete the Challenge.': '灭虫挑战的成就变为需要在到达区域120时至少拥有100层虫群壮大，然后完成灭虫挑战。',
    'Map at Zone \'Exit At Zone\' renamed to \'Start Zone\', and a new field has been added for \'End Zone\'. End Zone defaults to 999 but can be changed to cause a setting to stop repeating at a given Zone. Settings that exit at the same cell will not conflict if one ends before the other starts.': '自动进图中的“退出区域”更名为“起点区域”，新增了一个叫做“终点区域”的选项框。终点区域默认为999，设置后将在相应区域停止地图重复。在相同格子退出的设置，如果在其他设置生效前该设置到达终点，则不会冲突。',
    'Added an option for \'Repeat X Times\' to the Map at Zone repeat dropdown': '自动进图的设置重复次数中新增一项“重复X次”，可以自定义重复次数。',
    'Reunited a lost closing paranthesis with his family in the resource breakdown for Gatherer (Scruffy/Fluffy)': '资源产量明细中的丰产(污污/绒绒)补上了丢失的右括号。',
    'If AutoJobs is enabled and enough workspaces are available, AutoJobs will now fill Miners and Scientists to their proper ratio amount as soon as they\'re unlocked.': '如果开启了自动工作，且工作区足够，则它会在解锁矿工和科学家时立刻分配相应工作。',
    'Added the Storm and Berserk Challenge descriptions to their C3 descriptions': '增加了风暴和狂战的挑战³描述。',
    'You can now see a brief description of the effects of each Map Biome in the Map Biome Dropdown tooltip': '地图库房的生物群落增加了每种生物群落的简单效果描述。',
    'Scruffy L15 (+10% Nu spend mult) now works in U1 as well': '污污等级15的技能(传家宝可使用的虚空物质上限增加10%)可在宇宙1中生效了。',
    'Improved the alignment of Achievement category bottom corners in the Achievements UI': '改进了成就界面中成就类别底角的对齐方式。',
    'Fixed a Universe 2 bug where the "Base" in the Loot Breakdown was compensating for nonexistent MegaBooks': '修复了宇宙2中战利品明细的“基础值”错误地乘以不存在的超级升级的问题。',
    'The Portal Error message now fits better without overlapping text': '传送时报错的消息提示文字不再互相重叠。',
    'Fixed an issue where you could remove too many points of Carpentry on the Downsize Challenge, potentially bricking your run': '修复了进行精简挑战时可能移除过多木工特权，从而阻碍进度的问题。',
    'Respeccing out of Frenzy now properly clears the Frenzy stack icon': '将战狂特权洗点至0级后不再使战狂层数图标仍然留在界面上。',
    'Fixed an issue where the damage display would still show red crits as base once purple crits were at or above 100% chance': '修复了当紫色暴击率达到或超过100%时，游戏界面的攻击力旁暴击颜色仍然为红色的问题。',
    'Fixed an issue where the Equality popup would get messed up if pressing the hotkey while another tooltip was active': '修复了同时按下快捷键导致平等窗口错乱的问题。',
    //#endregion
    //#region 5.4.6
    'Strange eggs have started appearing in some Zones, click them and see what\'s inside! This event will last for the rest of April.': '有一些区域开始出现奇怪的蛋，点击它们，看看里面有什么！活动持续到4月底。',
    //#endregion
    //#region 5.4.5
    'Presimpts and Snow have melted away until next year': '雪和脆皮小礼融化了，明年再见。',
    //#endregion
    //#region 5.4.4
    'Added a new repeatable Challenge to U2 Z130, and a new Perk that can be unlocked from the new Challenge.': '增加了一个宇宙2区域130解锁的可重复挑战，该挑战可以解锁一个新的特权。',
    //#endregion
    //#region 5.4.3
    'Note: A new U2 Challenge and Perk are in the works and currently being tested on our Discord server. However they need a few more days of testing/balance and I really wanted to switch to snow! Expect another patch in the next few days.': '注意：新的宇宙2挑战和特权已经制作完毕，在Discord上进行测试了。尽管它还需要测试和完善，但我已经迫不及待想让雪进来了！之后很快就会有另一个补丁的。',
    'Pumpkimps have gone in to hiding until next year': '脆皮南瓜怪躲起来了，明年再见。',
    'Snow and Presimpts have returned to the World for the rest of the year!': '雪和脆皮小礼又回到了世界上，它们会待到年底！',
    'Added 5 placeholder levels to Scruffy that only grant bonus damage.': '污污追加了5级上限，暂时只用于占位，提供伤害加成。',
    'You can now pat your pets!': '可以给绒绒污污拍头了！',
    'Centered the Equality Scaling popup over the left side of the screen rather than the entire screen, so that the battle pane is fully visible.': '平等缩放的提示框从屏幕中央移到了屏幕左边，这样就不会遮住战斗界面了。',
    //#endregion
    //#region 5.4.2
    'Pumpkimps have made their return to Trimps for the next few weeks! Find a Pumpkimp Patch in Zones, or lone Pumpkimps in maps for a chance at some treats!': '脆皮南瓜怪们又回来啦！接下来几周内，世界上可能出现一个由脆皮南瓜怪组成的图案，地图中也有零星落单的脆皮南瓜怪出现，击败它们可以获得很多好东西！',
    //#endregion
    //#region 5.4.1
    'Fixed an issue that was causing U2 Improbability stats to inflate as if Corruption was present in U2': '修复了宇宙2乌有者数值因腐化错误生效而不正常的问题。',
    'Fixed an issue that could cause Mayhem bosses to not gain any extra health or attack in certain situations': '修复了暴乱挑战的首领在某些情况下数值不上涨的问题。',
    'Fixed a spot on Golden Radon that said Helium': '修复了一处金色氡仍然被称为金色氦的文本错误。',
    //#endregion
    //#region 4.21
    'Challenge': '挑战',
    //#endregion
    //#region 1.0
    'Bumped up the rewards from battle a bit.': '增加了战利品奖励。',
    'So many bug fixes': '修复了大量错误。',
    'Fixed an issue with upgrades not spawning in the right spot': '修复了升级在错误的地方出现的问题。',
    'Fixed a bug with post-upgrade shields, reduced value a bit': '修复了升级盾牌后产生的错误，减少了它的数值',
    'Buildings queue handles multiple purchases much more gracefully': '建筑队列可以更好处理多个建筑了。',
    'Fixed prestige values and costs': '修复了重铸的数值和花费。',
    'Messages are color coded a little better now. I think these colors stand out well on the background and are easy to read, but if someone has trouble reading them let me know.': '消息按颜色显示的效果变得更好了。',
    'Added offline progress for food, wood, and metal.': '增加了食物、木头和金属的离线进度。',
    'Changed barns, sheds, and forge to increase your max by 100%, price is the same.': '谷仓、窝棚、锻造厂的效果变为增加100%上限，花费也相应增加了。',
    'Switched back to tabs for the purchase area. The filters didn\'t really make sense here.': '购买区域改回使用选项卡。',
    'Bug fixes': '修复了错误。',
    'Added a new way to get block after world 10. I don\'t want to spoil it. But it\'s there.': '增加了在区域10以后获得格挡的另一种方法。',
    'Added a few more soft reset rewards': '增加了一些软重置的奖励。',
    'Finished implementing soft reset. Finally.': '引入了软重置机制。',
    'All of the content additions I had planned are now implemented. The next few days will be all balance and bug fixes before 1.0': '所有计划中的内容已经全部引入。接下来会主要集中在游戏平衡和错误修复上。',
    'Increased later game block upgrades, lowered growth rate of Gym cost.': '增加了游戏后期的格挡升级数值，减少了健身房花费的增长速度。',
    'Implemented most of the soft reset rewards.': '引入了大部分软重置奖励。',
    'Added a \'boss\' mob to the end of certain worlds. He drops extra stuff.': '在特定区域的最后增加了“首领”敌人。它可以掉落更多东西。',
    'Added ability to give loot drops to certain mobs. Dragimps now drop some gems.': '特定的敌人可以掉落特定战利品了。脆皮龙会掉落一些宝石。',
    'Numbers lower than 10,000 no longer turn into K. It was actually longer.': '低于10000的数字不再变成以K显示的格式了。',
    'Added support for unrecyclable story maps. Added 1 unique map that cannot be recycled.': '使一些地图变得不可回收。并增加了1张不可回收的独特地图。',
    'Added button that allows maps to repeat automatically.': '增加了自动重复地图的按钮。',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    //#endregion
    //#region 0.06
    'Fixed bug where structures earned in maps were unlocking more often than intended': '修复了运行地图获得的建筑解锁更早的错误。',
    'Fixed Battleaxe prestige bug': '修复了战斧重铸的错误。',
    'Added 2 new housing structures to maps': '增加了2种新住房建筑，可通过运行地图获得。',
    'Added 2 new upgrades (for the 2 new housing structures) to maps': '增加了2种新住房相应的升级，同样可通过运行地图获得。',
    'Added a new bad guy, "Shrimp", which only spawns in maps that sound watery. They do nothing special, but they work.': '增加了新敌人“脆皮虾”，只在水域环境地图出现，但暂时没有特殊能力。',
    'The breeding Trimps counter works at numbers higher than 1000 now': '当数值大于1000时，繁殖计时也能正常工作了。',
    'Added a check when buying the "Coordination" upgrade. Said check will not allow you to purchase the upgrade if you do not have a high enough maximum population to battle with it.': '增加了购买“协作”升级时的验证。您必须拥有足够的脆皮上限才能购买它。',
    'You can no longer fight your way into negative employed Trimps': '脆皮数量不再会因为战斗而变成负数了。',
    'Added numbers to Jobs. You can click them to buy or sell more or less workers.': '增加了购买数量。您可以通过它们来更好地调整工作。',
    'Reduced the exponential growth rate of job costs (they\'re cheaper later in the game now, you can buy more scientists and stuff)': '减少了工作花费的指数增长速度。',
    //#endregion
    //#region 0.05
    'I reset saves again. I\'m sorry, but it had to be done, and I warned you! However, getting to World 5 should be much quicker than before due to some new balance tweaks.': '存档再次进行了重置。非常抱歉，但必须这么做。该版本可以更快地到达区域5。',
    'In case you didn\'t notice, the UI is different. It\'s not totally done, but it\'s progress. I still haven\'t tested it on every screen size, but it\'s pretty responsive. If it doesn\'t work on your screen, zoom out, zoom in, or resize the window until it looks good as a temporary fix, then let me know what size screen you have and I\'ll fix it ASAP. Screens lacking in height may have some trouble.': '对游戏界面进行了调整。',
    'Added maps system. After World 5, you\'ll start to find maps. The maps will generate with a level equal to the world you found them in. Maps have random names (though the names don\'t have any effect on gameplay), and they randomly generate size, difficulty, and a loot bonus within a range. You can find cool stuff in them, and I hope they\'re fun. ': '增加了地图系统。在区域5以后您就可以发现地图了。地图等级与发现它的区域相等。地图拥有随机生成的名字(但不影响效果)，尺寸、难度和战利品加成也是随机生成的。您可以在里面获得好东西，希望您喜欢。',
    'Maps can be recycled. Each recycled map gives you a map fragment. Once you get 3 map fragments, the game will generate a random map at the level of your current world.': '您可以回收地图了，回收后可以获得1地图碎片。如果您拥有3地图碎片，则将自动随机生成一张地图，地图等级与当前区域相等。',
    'Add new resource, Gems. Gems can be found by running maps, and are required for most upgrades found in maps. The higher the level of map, and the higher the loot bonus, the more gems you\'ll receive.': '增加了新资源宝石。运行地图后可以获得宝石，地图中的大部分升级都需要花费宝石。地图等级越高或战利品加成越高，获得的宝石就越多。',
    'Added room for 2 more new resources. I haven\'t decided what they\'ll be yet, but they\'ll be sweet.': '预留了2种新资源的空间。',
    'Added new building, Mansion. The schematic for Mansion can be found by running maps.': '增加了新建筑豪宅。您可以通过运行地图解锁它的蓝图。',
    'Added equipment prestiging. Starting with level 6 maps, you\'ll be able to unlock a prestige for all of the equipment earned in World 1. Level 7 unlocks World 2 equipment prestiges. Level 11 unlocks World 1 equipment prestiges again. The game has infinite equipment content now, hurray! (Balance not guaranteed to be good)': '增加了装备重铸。从地图等级6开始，您将解锁区域1装备的重铸升级。地图等级7将解锁区域2装备的重铸升级。地图等级11将重新解锁区域1装备的重铸升级。装备不再有上限了，真棒！(暂不保证平衡性)',
    'Added an upgrade to double the breeding speed of your Trimps, unlocked every 5th world.': '增加了一个升级，它可以使我方脆皮的繁殖速度翻倍，每5个区域出现一次。',
    'Tooltip costs now show in green if you can afford that particular ingredient, and red if you cannot.': '如果资源足够购买特定项目，则提示框的文本将为绿色，否则将为红色。',
    'Added new message category and filter for "Notices". Notices show up in red in your chat log, and are generally important. I wouldn\'t recommend filtering out notices.': '增加了新的消息类别“通知”。通知字体为红色，不建议关闭它们的显示。',
    'Trimps breed a teensy bit faster.': '我方脆皮繁殖速度略微增加。',
    'Bad guys hit a teensy bit softer.': '敌人攻击力略微减少。',
    'Equipment is less powerful, but has gone down in price. The ratio of resource to stat points is still relatively the same, but slightly higher on the stat point side. (You get more stat points per resource spent now)': '减少了装备的效果及花费，性价比略微增加。',
    'I again adjusted the resource rewards from battle. This is proving really tough to balance for some reason. Why did Jimmy P. Incrementalgameson (father of incremental games) make balance so difficult for developers?': '重新调整了战利品数值。',
    'Progress bars now go all the way across before resetting. ': '进度条在回到起点之前将一直往后延伸。',
    'Added alert icon when you unlock something new. This goes away after a mouseover.': '增加解锁新东西时的感叹号提醒。鼠标经过相应升级后感叹号将消失。',
    'All known tooltip/text/grammatical errors are fixed. If you notice more, let me know. Please note that many of the upgrade names are a WIP': '修复了已知的提示框/文本/语法错误。',
    'Equipment unlocks at the bottom of the equipment menu, but the menu scrolls down when something new is unlocked. People didn\'t like it adding stuff at the top for some reason. I\'m not sure if this is better, but it\'s fun to test things.': '解锁新东西时，自动向下滚动。',
    'I\'m putting maps again because they took a long time to develop and probably nobody will read this anyway. If you\'re reading this, hi.': '我花了很久才把地图开发出来，或许没人会读到这里吧。如果您正在阅读这条日志，向您问好。',
    'Numerous other small bug fixes': '修复大量其他小错误。',
    //#endregion
    //#region 0.04
    'Made game slightly less angry when tabbing back in after being in the background for a long time. Still have work to do on this, but it should no longer be crashing.': '在游戏保持后台较久后切换回游戏时，不再导致游戏崩溃。',
    //#endregion
    //#region 0.03
    'Added auto-loading functionality': '增加了自动读取功能。',
    'Added reset button': '增加了重置按钮。',
    'Fixed tooltip errors': '修复了提示框的错误。',
    'Made game look much better on smaller monitors': '使游戏在低分辨率下的显示效果变得更好。',
    'Numbers larger than 999 get down with division': '超过999的数字添加了分隔符。',
    'Made save string smaller': '使存档字符串变得更短了。',
    'Resource rewards from battling now scale at a (hopefully) more appropriate rate': '战利品增长速度更加合理。',
    //#endregion
    //#region 0.02
    'Due to heavy balance changes and content additions, saves were reset. Sorry :(': '由于平衡性调整较多，并新增了较多内容，因此存档将进行重置。我们对此表示抱歉 :(',
    'Started writing down updates': '开始记录更新内容。',
    'Moved log to bottom': '将消息记录移到了底部。',
    'Added filters to the chat log. Click to turn on or off.': '可以设置想要看到的消息类别了。点击后可以开启或关闭。',
    'Added icons to the start of each message to make stuff more noticeable by your eyeballs.': '在每种消息前增加了相应的图标，以使其更容易辨认。',
    'All text inside the log is black (for now). I may change the icon colors in the log based on the type of text, but I can worry about that later.': '所有的消息文字暂时都是黑色的。这在之后可能会进行调整。',
    'Left menu buttons are all on the right side': '调整了左侧菜单的按钮的位置。',
    'Lined up left menu text': '排列了左侧菜单的文本。',
    'Re-positioned some elements to feel less strange before everything is unlocked': '调整了部分元素的位置，以免它们在解锁前使界面显得比较奇怪。',
    'Structures queue no longer stacks items together.': '建筑队列不再将建筑合并建造。',
    'Added \'seconds\' to structures queue progress bar': '建筑队列进度条上增加了时间提示。',
    'Structures queue progress bar now shows the correct amount of time remaining after finding one or more foremen': '建筑队列进度条可以在发现工头后正确更新时间了。',
    'Removed feature that changed background color of elements when the player is gathering.': '移除了当玩家手动采集资源时变更背景颜色的设定。',
    'Gather/chop/mine/build/research buttons are now replaced with text if you\'re already gathering there, this should prevent confusion with people expecting to have to spam click in order to gather.': '当玩家手动采集资源时，相应按钮的文字将发生变化。',
    'Added some icons to the gathering text for food, wood, and metal. I like that they make it easier to see where you\'re gathering, but I don\'t know if I actually like them. I don\'t have room for them on the left menu, so I\'m undecided what I\'m going to do there.': '增加了采集食物、木头和金属的相应图标。',
    'Moved a lot of stuff around in the battle section.': '调整了战斗大量内容的位置。',
    '\'Bad Guys\' are gone. Instead, I have added a few random enemies with weird names (there will be more later, with different enemies for different worlds, etc). The randomized enemies have slightly different attack and health modifiers depending on who you\'re fighting.': '敌人拥有自己的名字了，它们的属性也会不同。',
    'The new enemies have a new stat which determines if they attack first or second. Certain enemies (by name) are faster than others. Half of the enemies will attack first, half will attack second. The animations (for now) still show both attacks at the same time, but the difference is noticeable if the faster opponent gets a killing blow.': '敌人拥有了新属性，将显示它们是否抢先攻击。',
    'Removed Medic (for now)': '(暂时)移除了医生。',
    'Added new stat, \'block\', which only applies to Trimps (for now). By progressing through the battle system, you will unlock a structure that increases block by a flat number per Trimp. Later in the battle system, you\'ll unlock a Job that increases your total block # by 10% each. The flat number acts as a wood sink, the % acts as a food sink. I\'m interested to see how people feel about this mechanic': '增加了新属性“格挡”。之后您还可以解锁增加格挡的建筑和工作。增加格挡的建筑需要花费木头，增加格挡的工作需要花费食物。',
    'Save strings get compressed to base64': '存档代码使用base64进行了加密。',
    'Added import/export buttons (and added code that makes them do stuff)': '增加了导入/导出按钮(并增加了相应代码)。',
    'Added a handful of new upgrades. The goal is to eventually have more than one upgrade available at any time, to force you to make decisions. The game is not at this point yet, but it is closer than last week.': '增加了大量新升级。这么做是为了给游戏增加决策空间。',
    'You can now see a numerical representation of what World you\'re currently on. I plan to eventually add a randomized world naming system, but this is good enough for now.': '您可以看到当前区域的数值了。',
    'Made tooltips render a little bit higher. Hopefully this should fix the issue some people were having where tooltips were generating below the screen. If you still have a problem with this, please let me know what your screen resolution is and I\'ll try my very hardest to fix it better!': '使提示框往上移了一些，以避免部分玩家提示框超出屏幕底部的情况。',
    'Completely rewrote the game loop in order to support the game running in a background tab. I have never done anything like this, it was very scary (there\'s randomization in the battles, and the timing relies on breeding speed so there was a lot that could go wrong), but it SEEMS to be working fine. I haven\'t had a ton of time to really thoroughly test this, but please let me know if you notice a problem with it.': '添加了游戏后台运行支持。',
    'Clicking \'load\' now resets the game first instead of just adding a second copy of everything to the screen.I have tested this a decent amount, but there could still be some bugs with the reset function. If you notice bugs after loading during a live game, let me know, refresh, then load again.': '点击“读取”按钮时会先重置游戏，以避免产生错误。',
    'Enemy attack is lower, enemy health is higher, Trimp breeding speed is lower, equipment benefits are higher (and there is now a block mechanic, described above). This should keep the game moving at about the same pace as before, but prevent reaching a point where you start getting one shot and frustrated.': '增加了敌人的攻击力，减少了敌人的生命值，减少了我方脆皮繁殖速度，装备的效果变得更好了。',
    'Added \'fire\' button to jobs menu. This allows you to redistribute your workers. You will not receive a resource refund for firing a worker, but the price of the next worker of that type will go back down as if you had never purchased it.': '工作部分增加了“解雇”功能。解雇时不返还资源，但可以减少工作的资源花费。',
    'Increased the amount of equipment in game. I tried really hard to tune it right, but I would really really love some feedback on the tuning.': '增加了游戏中的装备数量。',
    'A few other random surprises': '以及其他各种各样的改动。',
    //#endregion

    //原样
    '': '',
    '': '',
}


//需处理的前缀
var cnPrefix = {
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    ": ": "：",
}

//需排除的，正则匹配
var cnExcludeWhole = [
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
]);