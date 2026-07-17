package com.sangeeth.portfolio

import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Outline
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.graphics.vector.Path
import androidx.compose.ui.unit.Density
import androidx.compose.ui.unit.LayoutDirection

class ParallelogramShape(val skew: Float = 20f): Shape {
    override fun createOutline(
        size: Size,
        layoutDirection: LayoutDirection,
        density: Density
    ): Outline {
        val path = androidx.compose.ui.graphics.Path().apply {
            moveTo(x = skew, y = 0f)
            lineTo(x = size.width, y = 0f)
            lineTo(x = size.width - skew, y = size.height)
            lineTo(x = 0f, y = size.height)
            close()
        }
        return Outline.Generic(path)
    }
}