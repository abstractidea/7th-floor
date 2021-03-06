/**
 * Mutually exclusive states for a Block.
 * TODO Consider whether the two states, CREATE and GONE, should be present
 * for the BlockState enumeration (i.e. could they be considered implicit
 * states for a Block).
 */
var BlockState = {
	CREATING : 0,
    FALLING : 1,
    SITTING : 2,
    INCUBATING : 3,
    SWAPPING : 4,
    DYING : 5,
    GONE : 6
}
