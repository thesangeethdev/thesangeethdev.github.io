package com.sangeeth.portfolio

import androidx.compose.animation.core.LinearEasing
import androidx.compose.animation.core.RepeatMode
import androidx.compose.animation.core.animateFloat
import androidx.compose.animation.core.infiniteRepeatable
import androidx.compose.animation.core.rememberInfiniteTransition
import androidx.compose.animation.core.tween
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.unit.dp
import kotlinx.coroutines.Delay
import org.jetbrains.skia.paragraph.Alignment

@Composable
fun TechLogo(
    modifier: Modifier = Modifier,
    logo: Painter,
    contentDescription: String? = null,
    animationDelay: Int = 0
) {

    val infiniteTransition = rememberInfiniteTransition()
    val offsetY by infiniteTransition.animateFloat(
        initialValue = -4f,
        targetValue = 4f,
        animationSpec = infiniteRepeatable(
            animation = tween(
                durationMillis = 1500,
                delayMillis = animationDelay,
                easing = LinearEasing
            ),
            repeatMode = RepeatMode.Reverse
        )
    )
    Box(
        modifier = modifier
            .size(100.dp)
            .background(Color.Transparent, RoundedCornerShape(8.dp))
            .offset(y = offsetY.dp),
        contentAlignment = androidx.compose.ui.Alignment.Center
    ) {
        Image(
            painter = logo,
            contentDescription = contentDescription,
            modifier = Modifier.fillMaxSize(2f)
        )
    }
}