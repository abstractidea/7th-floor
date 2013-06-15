/**
 * Mutually exclusive states for a Block.
 * TODO Consider whether the two states, CREATE and GONE, should be present
 * for the BlockState enumeration (i.e. could they be considered implicit
 * states for a Block).
 */
var BlockState = {
	CREATE : 0,
    FALL : 1,
    SETTLED : 2,
    INCUBATE : 3,
    SWAP : 4,
    DEATH : 5,
    GONE : 6
}
