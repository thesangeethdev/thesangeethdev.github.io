@file:OptIn(InternalResourceApi::class)

package portfolio.shared.generated.resources

import kotlin.OptIn
import kotlin.String
import kotlin.collections.MutableMap
import org.jetbrains.compose.resources.DrawableResource
import org.jetbrains.compose.resources.InternalResourceApi
import org.jetbrains.compose.resources.ResourceContentHash
import org.jetbrains.compose.resources.ResourceItem

private const val MD: String = "composeResources/portfolio.shared.generated.resources/"

@delegate:ResourceContentHash(-164_804_662)
internal val Res.drawable.Android_robot: DrawableResource by lazy {
      DrawableResource("drawable:Android_robot", setOf(
        ResourceItem(setOf(), "${MD}drawable/Android_robot.png", -1, -1),
      ))
    }

@delegate:ResourceContentHash(-1_597_683_415)
internal val Res.drawable.Kotlin: DrawableResource by lazy {
      DrawableResource("drawable:Kotlin", setOf(
        ResourceItem(setOf(), "${MD}drawable/Kotlin.png", -1, -1),
      ))
    }

@delegate:ResourceContentHash(470_159_096)
internal val Res.drawable.compose_multiplatform: DrawableResource by lazy {
      DrawableResource("drawable:compose_multiplatform", setOf(
        ResourceItem(setOf(), "${MD}drawable/compose-multiplatform.xml", -1, -1),
      ))
    }

@delegate:ResourceContentHash(-548_339_130)
internal val Res.drawable.kmp: DrawableResource by lazy {
      DrawableResource("drawable:kmp", setOf(
        ResourceItem(setOf(), "${MD}drawable/kmp.png", -1, -1),
      ))
    }

@delegate:ResourceContentHash(1_750_170_468)
internal val Res.drawable.kotlin_Ktor: DrawableResource by lazy {
      DrawableResource("drawable:kotlin_Ktor", setOf(
        ResourceItem(setOf(), "${MD}drawable/kotlin-Ktor.png", -1, -1),
      ))
    }

@InternalResourceApi
internal fun _collectCommonMainDrawable0Resources(map: MutableMap<String, DrawableResource>) {
  map.put("Android_robot", Res.drawable.Android_robot)
  map.put("Kotlin", Res.drawable.Kotlin)
  map.put("compose_multiplatform", Res.drawable.compose_multiplatform)
  map.put("kmp", Res.drawable.kmp)
  map.put("kotlin_Ktor", Res.drawable.kotlin_Ktor)
}
