class Item {
  // Weight of object
  var weight;

  // Animation frames
  var frames[];

  // My owner
  var owner;

  // My radius
  var radius;

  // Method to be called when picked up
  pickUp() {

  }

  // Called when dropped
  drop() {

  }

  // Called on frame
  render() {

  }
}
class Candy extends Item {
  render() {}
}
class Weapon extends Item {
  // Damage to inlict
  var damage;

  render() {}

  // Called when damaging player
  damagePlayer();
}
class RangedWeapon extends Weapon {
  // How much less damage does the bullet do
  var decayDamageMult;

  // How many shots are fired on once click
  var projectileNo;

  // Ammo, rounds left
  var ammo, rounds;

  // Starting ammo and rounds
  var startAmmo, startRounds;

  // Fire speed
  var fireSpeed;

  // Accuracy of gun
  var accuracy;

  // Range of Gun
  var range;

  render() {}
}
class Gun extends RangedWeapon {
  render() {}
}
class Bow extends RangedWeapon {
  render() {}
}
class Pistol extends Gun {
  render() {}
}
class AssaultMachineGun extends Gun {
  render() {}
}
class SubmachineGun extends Gun {
  render() {}
}
class Sniper extends Gun {
  render() {}
}
class Shotgun extends Gun {
  render() {}
}
class MeleeWeapon extends Weapon {
  // Melee Range in radius
  var range;
  render() {}
}
class Knife extends MeleeWeapon {
  render() {}
}
class Sword extends MeleeWeapon {
  render() {}
}
class AmmoBox extends Item _{
  // Ammo in AmmoBox
  var ammo;
  render() {}
}
